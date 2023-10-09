import React from "react";
import EditIcon from "../../../assets/component/EditIcon";
import RemoveIcon from "../../../assets/component/RemoveIcon";
import { Colors } from "../../common/colors";
import Table from "../../common/components/table";
import { useStylesFromThemeFunction } from "./OrderList";
import toast from "react-hot-toast";
import { getOrders } from "../../../data-management/cloud/firebase/firestore/order";

interface ComponentProps {
  orders?: any[];
}

const OrderList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState([
    "id",
    "Title",
    "Units in Stock",
    "Price",
    "category",
    "description",
  ] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState({} as any);
  const [orders, seOrders] = React.useState(
    props?.orders as any[] | [] as any[]
  );
  const [showOrderModal, setShowOrderModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (product: any) => {
  //   setSelectedProduct(product);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getOrders().then((res) => {
      seOrders(res);
      renderTableData();
    });
  }, []);

  // const handleRemoveProduct = (product: any) => {
  //   try {
  //     if (window.confirm("Are you sure you want to remove this product?")) {
  //       // call delete product api here

  //       console.log(product);
  //       toast.success(`${product.name} removed successfully`);
  //     } else {
  //       throw new Error("Product not removed");
  //     }
  //   } catch (e) {
  //     toast.error(e.message || "Error while removing product");
  //     console.log(e.message);
  //   }
  // };
  const onViewOrder = (order: any) => {
    console.log({ order });
  };
  // const handleEditProduct = (product: any) => {
  //   // setSelectedProduct(product);
  //   // setShowProductUpdateModal(true);
  // };
  // const handleUpdate = (updatedProduct: any) => {

  // };
  const renderTableData = () => {
    return orders?.map((product) => {
      return (
        <tr key={product.id} onDoubleClick={() => onViewOrder(product)}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.unitsInStock}</td>
          <td>{product.unitPrice}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
        </tr>
      );
    });
  };

  if (orders?.length !== 0) {
    renderTableData();
  }

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
