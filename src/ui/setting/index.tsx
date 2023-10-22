import React from "react";
import ColorList from "./colors-list";
import { Tab, Tabs } from "react-bootstrap";
import InventoryList from "../inventory/inventory-list";

const Setting: React.FC<any> = () => {
  return (
    <Tabs defaultActiveKey="inventory" className="mb-3">
      <Tab eventKey="inventory" title="Products">
        <InventoryList />
      </Tab>
      <Tab eventKey="color-grid" title="Themes">
        <ColorList />
      </Tab>
    </Tabs>
  );
};

export default Setting;
