import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/components/table";
import { getOrders } from "../../../data-management/cloud/firebase/firestore/order";
import ListLayout from "../../app-layout/list-layout";
import { Modal } from "react-bootstrap";
import { useStylesFromThemeFunction } from "./OrderList";

interface ComponentProps {
  orders?: any[];
}

const OrderList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [showProductModal, setShowProductModal] = useState({} as any);
  const [productsInModal, setProductsInModal] = useState([]);
  const [tableHeadings] = useState([
    "Sr#",
    "Customer",
    "Products",
    "Total",
    "Date Time",
  ] as string[]);
  const [isLoading] = React.useState(false);
  const [orders, seOrders] = React.useState(
    props?.orders as any[] | [] as any[]
  );

  useEffect(() => {
    getOrders().then((res) => {
      seOrders(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onViewOrder = (order: any) => {
    setShowProductModal(order);
  };
  const renderTableData = useMemo(() => {
    return orders?.map((order, index) => {
      return (
        <tr key={order.id} onDoubleClick={() => onViewOrder(order)}>
          <td>{index + 1}</td>
          <td>{order.customerName}</td>
          <td>{order.products?.length}</td>
          <td>{order.total}</td>
          <td>{order.dateTime}</td>
        </tr>
      );
    });
  }, [orders]);

  useEffect(() => {
    if (showProductModal?.products) {
      setProductsInModal(
        showProductModal?.products?.map((product, index) => {
          const { name, unitPrice, quantity, category } = product;
          const total = unitPrice * quantity;
          return (
            <tr key={name}>
              <td>{index + 1}</td>
              <td>{name ?? "-"}</td>
              <td>{quantity ?? "-"}</td>
              <td>{unitPrice ?? "-"}</td>
              <td>{total ?? "-"}</td>
              <td>{category ? category : "-"}</td>
            </tr>
          );
        })
      );
    }
  }, [showProductModal]);

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal
        className={classes.modalWrapper}
        show={showProductModal?.products}
        onHide={() => setShowProductModal(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <Table
              tableHeadings={[
                "Sr#",
                "Product",
                "Quantity",
                "Price",
                "Total",
                "Category",
              ]}
              renderBody={productsInModal}
              loading={isLoading}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderList;
