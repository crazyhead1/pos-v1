import React, { useMemo } from "react";
import Table from "../../common/components/table";
import { getOrders } from "../../../data-management/cloud/firebase/firestore/order";

interface ComponentProps {
  orders?: any[];
}

const OrderList: React.FC<ComponentProps> = (props) => {
  const [tableHeadings] = React.useState([
    "Customer",
    "Products",
    "Total",
    "Date Time",
  ] as string[]);
  const [isLoading] = React.useState(false);
  const [orders, seOrders] = React.useState(
    props?.orders as any[] | [] as any[]
  );

  React.useEffect(() => {
    getOrders().then((res) => {
      console.log({ res });
      seOrders(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onViewOrder = (order: any) => {
    console.log({ order });
  };
  const renderTableData = useMemo(() => {
    return orders?.map((order) => {
      return (
        <tr key={order.id} onDoubleClick={() => onViewOrder(order)}>
          <td>{order.customerName}</td>
          <td>{order.products?.length}</td>
          <td>{order.total}</td>
          <td>{order.dateTime}</td>
        </tr>
      );
    });
  }, [orders]);
  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      {/* <Modal className={classes.modalWrapper} show={showProductUpdateModal} onHide={()=>setShowProductUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update {selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <InventoryForm product={selectedProduct} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default OrderList;
