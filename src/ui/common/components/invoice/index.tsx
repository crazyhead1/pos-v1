import React, { useMemo } from "react";
import { Product } from "../../../../interfaces/product";
import { DEFAULT_DISCOUNT_RATE, DEFAULT_TAX_RATE } from "../../constants";
import AmountValueComponent from "../amount-value-component";
import ButtonComponent, { btnSize } from "../button-component";
import InputComponent from "../input-component";
import Table from "../table";
import ValueComponent from "../value-component";
import { ComponentProps, useStylesFromThemeFunction } from "./Invoice";
import { btnType } from "../button-component/ButtonComponent.types";
import dayjs from "dayjs";
import clsx from "clsx";

export const Invoice: React.FC<ComponentProps> = ({
  label,
  options,
  isLoading,
  products,
  handleCancel,
  handleConfirm,
  handlePrint,
  invoiceNumber,
  disabled,
}) => {
  const classes = useStylesFromThemeFunction();
  const [amountDue, setAmountDue] = React.useState(0);
  const [amountPaid, setAmountPaid] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  const [isPrintEnable, setIsPrintEnable] = React.useState(false);
  const [amountReturned, setAmountReturned] = React.useState(0);

  const renderAddedProducts = useMemo(() => {
    if (products?.length <= 0) {
      setSubtotal(0);
      setTax(0);
      setTotal(0);
      setDiscount(0);
      setAmountDue(0);
      return <></>;
    }
    // render products and calculate totals here
    let tempSubtotal = 0;
    const renderedProducts = products.map((product) => {
      const { name, unitPrice, quantity } = product;
      const total = unitPrice * quantity;
      tempSubtotal += total;

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{unitPrice}</td>
          <td>{total}</td>
        </tr>
      );
    });
    setSubtotal(parseFloat(tempSubtotal.toFixed(2)));
    setTax(parseFloat((tempSubtotal * DEFAULT_TAX_RATE).toFixed(2)));
    setTotal(parseFloat((tempSubtotal + tax).toFixed(2)));
    setDiscount(
      parseFloat(((tempSubtotal + tax) * DEFAULT_DISCOUNT_RATE).toFixed(2))
    );
    setAmountDue(
      parseFloat(
        Math.round(
          tempSubtotal + tax - (tempSubtotal + tax) * DEFAULT_DISCOUNT_RATE
        ).toFixed(2)
      )
    );
    return renderedProducts;
  }, [products]);

  const paidAmountChangeHandler = (amount: number) => {
    setAmountPaid(amount);
    setAmountReturned(Math.round(amount - amountDue));
  };
  return (
    <div className={classes.totalBillContainer}>
      <h1 className={clsx(classes.title, classes.p5, classes.spaceBetween)}>
        <div>Invoice</div> <div className={classes.title2}>{invoiceNumber}</div>
      </h1>
      <div className={clsx(classes.pl5)}>
        {dayjs(date).format("DD MMMM, YYYY")}
      </div>
      <div className={`${classes.equallyDistantColumn}`}>
        <AmountValueComponent
          label="Amount Due"
          value={`${amountDue}`}
          direction="column"
        />
      </div>

      <div className={classes.productsList}>
        {products.length <= 0 ? (
          <div className={classes.noData}>
            <p>No Products added yet.</p>
          </div>
        ) : (
          <Table
            tableHeadings={["Product", "Quantity", "Price", "Total"]}
            renderBody={renderAddedProducts}
            loading={isLoading}
          />
        )}
      </div>
      <div className={classes.paddingtop8}>
        <InputComponent
          label="Paid Amount"
          name="paidAmount"
          type="number"
          variant="primary"
          value={amountPaid.toString()}
          placeholder="Enter paid amount"
          onChange={paidAmountChangeHandler}
        />
      </div>
      <div className={classes.equallyDistantRow}>
        <ValueComponent
          label="Returned"
          value={`${Math.round(amountReturned)}`}
          direction="column"
        />
        <ValueComponent
          label="Subtotal"
          value={`${subtotal}`}
          direction="column"
        />
        <ValueComponent label="Tax" value={`${tax}`} direction="column" />
        <ValueComponent label="Total" value={`${total}`} direction="column" />
        <ValueComponent
          label="discount"
          value={`${discount}`}
          direction="column"
        />
      </div>
      <div className={classes.buttonsContainer}>
        <ButtonComponent
          onClick={handlePrint}
          disabled={!isPrintEnable}
          variant={btnType.OUTLINE}
        >
          Print
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            setIsPrintEnable(true);
            handleConfirm();
            setAmountPaid(0);
            setAmountReturned(0);
          }}
          isLoading={isLoading}
          //   size={btnSize.M}
          disabled={amountPaid <= 0 || isLoading}
          variant={btnType.PRIMARY}
        >
          Confirm
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            setAmountPaid(0);
            setAmountReturned(0);
            setAmountDue(0);
            handleCancel && handleCancel();
          }}
          variant={btnType.SECONDARY}
        >
          Clear
        </ButtonComponent>
      </div>
    </div>
  );
};
