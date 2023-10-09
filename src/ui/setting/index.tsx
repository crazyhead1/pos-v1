import React from "react";
import ColorList from "./colors-list";
import { Tab, Tabs } from "react-bootstrap";

const Setting = () => {
  return (
    <Tabs defaultActiveKey="color-grid" className="mb-3">
      {/* <Tab eventKey="add" title="Add Product">
        <AddNewInventory />
      </Tab> */}
      <Tab eventKey="color-grid" title="Themes">
        <ColorList />
      </Tab>
    </Tabs>
  );
};

export default Setting;
