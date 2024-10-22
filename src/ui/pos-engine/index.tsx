import React, { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../common/components/button-component";
import DropdownSearch from "../common/components/dropdown-serach";
import InputComponent from "../common/components/input-component";
import { Invoice } from "../common/components/invoice";
import Table from "../common/components/table";
import RemoveIcon from "../../assets/component/RemoveIcon";
import { ComponentProps, useStylesFromThemeFunction } from "./POSEngine";
import { Colors } from "../common/colors";
import toast from "react-hot-toast";
import { addLog } from "../../services/cloud/firebase/logging";
import { addOrderIntoPOS } from "../../parser/orders";
import {
  DEFAULT_DISCOUNT_RATE,
  DEFAULT_TAX_RATE,
  GLOBAL_DATE_TIME_FORMAT,
} from "../common/constants";
import { btnType } from "../common/components/button-component/ButtonComponent.types";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../redux/actions/product.actions";
import { IStateSelector } from "../../redux/store/store.types";
import {
  addLastInvoiceNumber,
  getLastInvoiceNumber,
} from "../../data-management/cloud/firebase/database/invoice/invoice.operations";
import { generateNextInvoiceNumber } from "../../utils/utilFunctions";
import dayjs from "dayjs";

export const POSEngine: React.FC<ComponentProps> = ({
  label,
  options,
  isLoading,
  products,
  disabled,
}) => {
  const { productList, loading } = useSelector(
    (state: IStateSelector) => state.data
  );
  const [showLoader, setShowLoader] = useState(false || isLoading || loading);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1 as number);
  const [selectedProduct, setSelectedProduct] = React.useState(null as any);
  const [addedProducts, setAddedProducts] = React.useState([] as any[]);
  const [invoiceNumber, setInvoiceNumber] = React.useState("");

  const classes = useStylesFromThemeFunction();
  useEffect(() => {
    setShowLoader(isLoading || loading);
    getLastInvoiceNumber()
      .then((res) => {
        setInvoiceNumber(generateNextInvoiceNumber(res));
      })
      .catch((err) => console.log({ err }));
  }, [isLoading, loading]);
  const productOptions = useMemo(
    () =>
      // products
      //   ? products.map((product) => ({
      //       label: `${product.id} - ${product.name}`,
      //       value: product,
      //     }))
      //   :
      productList?.map((product) => ({
        label: `${product.id} - ${product.name}`,
        value: product,
      })),
    [productList]
  );
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);
  const productChange = (product: any) => {
    setSelectedProduct(product);
    setQuantity(product.unitsInStock && product.unitsInStock > 1 ? 1 : 0);
  };

  const handleRemoveProduct = (product: any) => {
    setAddedProducts(
      addedProducts.filter((addedProduct) => addedProduct !== product)
    );
  };

  const handleIncreaseQuantity = (concernedProduct: any) => {
    if (!concernedProduct) return;
    isLoading = true;
    let newAddedProductList = JSON.parse(JSON.stringify(addedProducts));
    if (concernedProduct.quantity >= concernedProduct.unitsInStock) {
      toast.error("No more units stock");
      isLoading = false;
      return;
    }
    newAddedProductList = newAddedProductList.map((item) => {
      if (item.id === concernedProduct.id) {
        return {
          ...item,
          quantity: parseInt(item.quantity, 10) + 1,
        };
      }
      return item;
    });
    setAddedProducts(newAddedProductList);
  };
  const handleDecreaseQuantity = (concernedProduct: any) => {
    if (!concernedProduct) return;
    isLoading = true;
    let newAddedProductList = JSON.parse(JSON.stringify(addedProducts));
    if (concernedProduct.quantity <= 1) {
      toast.error("Minimum quantity is 1");
      isLoading = false;
      return;
    }
    newAddedProductList = newAddedProductList.map((item) => {
      if (item.id === concernedProduct.id) {
        return {
          ...item,
          quantity: parseInt(item.quantity, 10) - 1,
        };
      }
      return item;
    });
    setAddedProducts(newAddedProductList);
  };

  const renderAddedProducts = useMemo(() => {
    // render only body
    const renderedProducts = addedProducts.map((product) => {
      const { name, unitPrice, quantity } = product;
      const total = unitPrice * quantity;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <div className={classes.centeredRow}>
              <div className={classes.qualtityButtonWrapper}>
                <ButtonComponent
                  onClick={() => handleDecreaseQuantity(product)}
                >
                  -
                </ButtonComponent>
              </div>
              {quantity}
              <div className={classes.qualtityButtonWrapper}>
                <ButtonComponent
                  onClick={() => handleIncreaseQuantity(product)}
                >
                  +
                </ButtonComponent>
              </div>
            </div>
          </td>
          <td>{unitPrice}</td>
          <td>{total}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div
                className={classes.iconWrapper}
                onClick={() => handleRemoveProduct(product)}
              >
                <RemoveIcon fill={Colors.red} />
              </div>
            </div>
          </td>
        </tr>
      );
    });

    isLoading = false;
    return renderedProducts;
  }, [addedProducts]);

  const handleProductAdd = () => {
    if (!selectedProduct) return;

    let addNewProduct = true;
    isLoading = true;
    addedProducts.forEach((product) => {
      if (
        product.name === selectedProduct.name &&
        parseInt(product.quantity) + parseInt(quantity.toString()) <=
          parseInt(product.unitsInStock)
      ) {
        product.quantity =
          parseInt(product.quantity) + parseInt(quantity.toString());
        isLoading = false;
        addNewProduct = false;
        return;
      }
      if (
        parseInt(product.quantity) + parseInt(quantity.toString()) >
        parseInt(product.unitsInStock)
      ) {
        toast.error("No more units in stock");
        addNewProduct = false;
        return;
      }
    });
    if (isLoading && addNewProduct)
      setAddedProducts([...addedProducts, { ...selectedProduct, quantity }]);
    // renderAddedProducts();
  };

  const handleCancel = () => {
    setAddedProducts([]);
    toast("Order Cancelled");
  };

  const handlePrint = async () => {
    try {
      // confirm order here

      // print here

      toast.loading("Printing...", { duration: 10000 });
      //remove this line after confirm order and print
      throw new Error("Error");
    } catch (error) {
      await addLog({
        message: error.message,
        path: `${__filename}-handlePrint`,
      });
      toast.error("Error while printing invoice");
    }
  };

  const handleConfirm = async () => {
    setShowLoader(true);
    let tempSubtotal = 0;
    const productsInOrder = addedProducts.map((product) => {
      const { name, unitPrice, quantity } = product;
      const total = unitPrice * quantity;
      tempSubtotal += total;
      return {
        name,
        quantity,
        unitPrice,
        total,
        ...product,
      };
    });
    // confirm order here
    const orderPayload = {
      products: productsInOrder,
      subtotal: tempSubtotal,
      tax: tempSubtotal * DEFAULT_TAX_RATE,
      total: tempSubtotal + tempSubtotal * DEFAULT_TAX_RATE,
      invoiceNumber,
      discount:
        (tempSubtotal + tempSubtotal * DEFAULT_TAX_RATE) *
        DEFAULT_DISCOUNT_RATE,
      amountDue: Math.round(
        tempSubtotal +
          tempSubtotal * DEFAULT_TAX_RATE -
          (tempSubtotal + tempSubtotal * DEFAULT_TAX_RATE) *
            DEFAULT_DISCOUNT_RATE
      ),
      customerName: "POS",
      customerId: "",
      employeeName: "",
      employeeId: "",
      dateTime: dayjs().format(GLOBAL_DATE_TIME_FORMAT),
    };

    addOrderIntoPOS(orderPayload)
      .then((res) => {
        setQuantity(1);
        setSelectedProduct(null);
        dispatch(fetchProductList());
        toast.success("Order Confirmed");
        invoiceNumber &&
          addLastInvoiceNumber(`${invoiceNumber}`)
            .then((resp) => console.log("-"))
            .catch((err) => console.log({ err }));
        setShowLoader(false);
      })
      .catch((error) => {
        setShowLoader(false);
        toast.error("Error: Unable to add order!");
      });
  };
  const handleClearAll = () => {
    setQuantity(1);
    setSelectedProduct(null);
    setAddedProducts([]);
  };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainerLeft}>
        <div className={classes.productSearchContainer}>
          <DropdownSearch
            label="Product"
            options={productOptions ?? []}
            placeholder="Search Product"
            onChange={productChange}
          />
          <div className={classes.row}>
            <InputComponent
              label="Quantity"
              name="quantity"
              type="number"
              variant="primary"
              value={`${quantity}`}
              placeholder="0"
              onChange={(value) => {
                if (value < 1) {
                  toast.error("Quantity cannot be less than 1");
                  return;
                }
                setQuantity(value);
              }}
            />
            <ButtonComponent
              variant={btnType.PRIMARY}
              onClick={handleProductAdd}
            >
              Add
            </ButtonComponent>
          </div>
        </div>
        <div className={classes.productSuggestionContainer}>
          <Table
            tableHeadings={["Product", "Quantity", "Price", "Total", "Actions"]}
            renderBody={renderAddedProducts}
            loading={isLoading}
          />
        </div>
      </div>
      <div className={classes.innerContainerRight}>
        <Invoice
          products={addedProducts}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
          handlePrint={handlePrint}
          isLoading={showLoader}
          invoiceNumber={invoiceNumber}
        />
      </div>
    </div>
  );
};
