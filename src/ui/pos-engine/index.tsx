import React, { useEffect, useMemo, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
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
import {
  generateNextInvoiceNumber,
  sendEmail,
} from "../../utils/utilFunctions";
import dayjs from "dayjs";
import { getInvnetoryRunningOutEmailTemplate } from "../../constants/emailjs";

export const POSEngine: React.FC<ComponentProps> = ({
  label,
  options,
  isLoading,
  products,
  disabled,
}) => {
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  const handlePrintHook = useReactToPrint({
    content: () => invoiceRef.current,
  });
  const { productList, loading } = useSelector(
    (state: IStateSelector) => state.data
  );
  const [showLoader, setShowLoader] = useState(false || isLoading || loading);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(0);
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
      productList
        ?.map((product) => ({
          label: `${product.id} - ${product.name}`,
          value: product,
        }))
        ?.filter((product) => parseInt(product.value.unitsInStock, 10) > 0),
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
    if (!quantity || quantity <= 0) {
      toast.error("Quantity should be greater than 0");
      return;
    }
    if (!selectedProduct) {
      toast.error("Please select a product");
      return;
    }

    if (
      selectedProduct.unitsInStock <= 0 ||
      selectedProduct.unitsInStock < quantity
    ) {
      toast.error("No more units in stock");
      return;
    }
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
      // invoice print template
      const Invoice = React.forwardRef((props, ref) => (
        <div className="invoice" ref={invoiceRef}>
          <div className="invoice-header">
            <h1>Invoice</h1>
            <h3>Invoice Number: ${invoiceNumber}</h3>
          </div>
          <div className="invoice-body">
            <table className="invoice-table">
              <tr className="invoice-table-row">
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              $
              {addedProducts
                .map(
                  (product) => `
                <tr class="invoice-table-row">
                  <td>${product.name}</td>
                  <td>${product.quantity}</td>
                  <td>${product.unitPrice}</td>
                  <td>${product.quantity * product.unitPrice}</td>
                </tr>
              `
                )
                .join("")}
            </table>
          </div>
          <div className="invoice-footer">
            <h3>
              Subtotal: $
              {addedProducts.reduce(
                (acc, product) => acc + product.quantity * product.unitPrice,
                0
              )}
            </h3>
            <h3>
              Tax: $
              {addedProducts.reduce(
                (acc, product) => acc + product.quantity * product.unitPrice,
                0
              ) * DEFAULT_TAX_RATE}
            </h3>
            <h3>
              Total: $
              {addedProducts.reduce(
                (acc, product) => acc + product.quantity * product.unitPrice,
                0
              ) +
                addedProducts.reduce(
                  (acc, product) => acc + product.quantity * product.unitPrice,
                  0
                ) *
                  DEFAULT_TAX_RATE}
            </h3>
          </div>
        </div>
      ));

      // print here using react-to-print
      handlePrintHook();
      //remove this line after print
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
    let goingOutOfStockProducts = [];
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
    goingOutOfStockProducts = productsInOrder.filter(
      (product) => product.unitsInStock <= 5
    );
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
        // send email here
        const email = localStorage.getItem("email");
        // if (email) {
        //   sendEmail(
        //     "notasadsarwar@gmail.com",
        //     getInvnetoryRunningOutEmailTemplate({
        //       invoice: {
        //         invoiceNumber,
        //         customer: orderPayload.customerName,
        //         date: orderPayload.dateTime,
        //       },
        //       products: productsInOrder,
        //       total: orderPayload.total,
        //       tax: orderPayload.tax,
        //       company: {
        //         email,
        //         phone: "---",
        //         address: "Pakistan",
        //       },
        //     })
        //   );
        // }

        setQuantity(1);
        setSelectedProduct(null);
        dispatch(fetchProductList());
        toast.success("Order Confirmed");
        invoiceNumber &&
          addLastInvoiceNumber(`${invoiceNumber}`)
            .then((resp) => console.log("-"))
            .catch((err) => console.log({ err }));

        // if (goingOutOfStockProducts.length > 0) {
        //   toast.error("Some products are going out of stock");
        //   const email = localStorage.getItem("email");
        //   if (email) {
        //     sendEmail(
        //       "notasadsarwar@gmail.com",
        //       `Products going out of stock: ${goingOutOfStockProducts
        //         .map(
        //           (product) =>
        //             `${product.name} - ${product.unitsInStock} units left`
        //         )
        //         .join(", ")}`
        //     );
        //   }
        // }
        setShowLoader(false);
        handleClearAll();
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
            value={selectedProduct}
            options={productOptions ?? []}
            placeholder="Search Product"
            onChange={productChange}
          />
          <div className={classes.row}>
            <InputComponent
              label="Quantity"
              name="quantity"
              variant="primary"
              value={quantity.toString()}
              placeholder="Enter quantity"
              onChange={(value) => {
                const containsNonDigitCharacters = `${value}`.match(/\D/);
                if (containsNonDigitCharacters) {
                  toast.error("Quantity should only contain digits");
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
