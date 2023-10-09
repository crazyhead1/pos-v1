import React from "react";
import toast from "react-hot-toast";
import { addProductIntoInventory } from "../../../parser/inventory";
import { getAllSuppliers } from "../../../parser/supplier";
import { addLog } from "../../../services/cloud/firebase/logging";
import InventoryForm from "../Inventory-form";
import { IProduct, TypeProductStatus } from "../../../redux/store/store.types";

// interface ComponentProps {
//   onSubmit?: (values, {resetForm}) => void;
//   onImageChange?: (images) => void;
//   suppliers?: [];
//   categories?: [];
// }

const AddNewInventory = () => {
  const onSubmit = async (values) => {
    const productPayload = {
      ...values,
      status:
        values.unitsInStock > 0
          ? TypeProductStatus.AVAILABLE
          : TypeProductStatus.OUT_OF_STOCK,
      createdAt: new Date().getTime().toString(),
      updatedAt: new Date().getTime().toString(),
    };
    addProductIntoInventory(productPayload)
      .then((res) => {
        toast.success(`${values.name} added successfully`);
      })
      .catch((e) => {
        toast.error(e.message || "Error while adding product");
        addLog({
          message: e.message || "Error while adding product",
          type: "error",
          path: "inventory/add-new-inventory",
        });
      });
  };

  const onImageChange = (images) => {};

  return (
    <div>
      <InventoryForm onSubmit={onSubmit} onImageChange={onImageChange} />
    </div>
  );
};

export default AddNewInventory;
