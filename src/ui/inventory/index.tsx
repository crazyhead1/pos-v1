import React, { useEffect, useState } from "react";

import AddNewInventory from "./add-new-inventory";
import InventoryList from "./inventory-list";
import { ComponentProps } from "./Inventory";
import ListLayout from "../app-layout/list-layout";
import { TypeProductStatus } from "../../redux/store/store.types";
import { addProductIntoInventory } from "../../parser/inventory";
import toast from "react-hot-toast";
import { addLog } from "../../services/cloud/firebase/logging";

const Inventory: React.FC<ComponentProps> = () => {
  const [closeDrawer, setCloseDrawer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (closeDrawer) {
        setCloseDrawer(false);
      }
    }, 200);
  }, [closeDrawer]);
  const onAddProduct = async (values) => {
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
        setCloseDrawer(true);
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
  return (
    <ListLayout
      title="inventory"
      drawerComponent={<AddNewInventory onSubmit={onAddProduct} />}
      listComponent={<InventoryList />}
      closeDrawer={closeDrawer}
    />
  );
};

export default Inventory;
