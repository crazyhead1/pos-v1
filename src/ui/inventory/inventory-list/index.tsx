import React, { useMemo } from "react";
import EditIcon from "../../../assets/component/EditIcon";
import RemoveIcon from "../../../assets/component/RemoveIcon";
import { Colors } from "../../common/colors";
import Table from "../../common/components/table";
import { useStylesFromThemeFunction } from "./InventoryList";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";
import {
  getProductsFromInventory,
  editProductFromInventory,
} from "../../../parser/inventory";
import InventoryForm from "../Inventory-form";
import { Box } from "@mui/material";

interface ComponentProps {
  products?: any[];
}

const InventoryList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings] = React.useState([
    "id",
    "Title",
    "Units in Stock",
    "Price",
    "category",
    "description",
    "Actions",
  ] as string[]);
  const [isLoading] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({} as any);
  const [products, setProducts] = React.useState(
    props?.products as any[] | [] as any[]
  );
  const [showProductUpdateModal, setShowProductUpdateModal] =
    React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (product: any) => {
  //   setSelectedProduct(product);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getProductsFromInventory().then((res) => {
      setProducts(res);
      // renderTableData();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveProduct = (product: any) => {
    try {
      if (window.confirm("Are you sure you want to remove this product?")) {
        // call delete product api here

        toast.success(`${product.name} removed successfully`);
      } else {
        throw new Error("Product not removed");
      }
    } catch (e) {
      toast.error(e.message || "Error while removing product");
    }
  };
  const handleEditProduct = (product: any) => {
    setSelectedProduct(product);
    setShowProductUpdateModal(true);
  };
  const handleUpdate = (updatedProduct: any) => {
    // call edit product api here
    editProductFromInventory(updatedProduct.id, updatedProduct)
      .then((res) => {
        toast.success(`${updatedProduct.name} updated successfully`);
        setShowProductUpdateModal(false);
        setSelectedProduct({} as any);
      })
      .catch((e) => {
        toast.error(e.message || "Error while updating product");
      });
  };
  const renderTableData = useMemo(() => {
    return products?.map((product) => {
      return (
        <tr key={product.id} onDoubleClick={() => handleEditProduct(product)}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.unitsInStock}</td>
          <td>{product.unitPrice}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>
            <Box className={classes.equallyDistantRow}>
              <Box
                className={classes.iconWrapper}
                onClick={() => handleEditProduct(product)}
              >
                <EditIcon fill={Colors.gray} />
              </Box>
              <Box
                className={classes.iconWrapper}
                onClick={() => handleRemoveProduct(product)}
              >
                <RemoveIcon fill={Colors.red} />
              </Box>
            </Box>
          </td>
        </tr>
      );
    });
  }, products);

  // if (products?.length !== 0) {
  //   renderTableData();
  // }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal
        className={classes.modalWrapper}
        show={showProductUpdateModal}
        onHide={() => setShowProductUpdateModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update {selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box className={classes.modalBodyWrapper}>
            <InventoryForm product={selectedProduct} onSubmit={handleUpdate} />
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InventoryList;
