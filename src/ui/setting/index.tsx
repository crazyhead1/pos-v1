import React from "react";
import ColorList from "./colors-list";
import { Tab, Tabs } from "react-bootstrap";
import GeneralSettings from "./general";

const Setting: React.FC<any> = () => {
  return (
    <Tabs defaultActiveKey="general" className="mb-3">
      <Tab eventKey="general" title="General">
        <GeneralSettings />
      </Tab>
      {/* <Tab eventKey="color-grid" title="Themes">
        <ColorList />
      </Tab> */}
    </Tabs>
  );
};

export default Setting;
