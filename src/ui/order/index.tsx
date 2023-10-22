import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ComponentProps } from "./Orders";
// import "boxicons";
import OrderList from "./order-list";
import ListLayout from "../app-layout/list-layout";

const Order: React.FC<ComponentProps> = () => {
  const [closeDrawer, setCloseDrawer] = useState(false);

  return (
    <ListLayout
      title="orders"
      // drawerComponent={<AddNewInventory onSubmit={onAddProduct} />}
      listComponent={<OrderList />}
      closeDrawer={closeDrawer}
    />
  );
};

export default Order;
