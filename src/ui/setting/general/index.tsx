import { Tab, Tabs } from "react-bootstrap";
import React, { FC } from "react";
import InventorySettings from "./components/inventroy-settings";
import UsersSettings from "./components/users-settings";

const GeneralSettings: FC = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="inventory" className="mb-3">
        <Tab eventKey="inventory" title="Inventory">
          <InventorySettings />
        </Tab>
        <Tab eventKey="users" title="Users">
          <UsersSettings />
        </Tab>
      </Tabs>
    </div>
  );
};

export default GeneralSettings;
