import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
// import 'boxicons';
import Customer from "../customer";
import Supplier from "../supplier";
import Employee from "../employee";
import { addOneEmployee } from "../../parser/employee";
import toast from "react-hot-toast";
import { addOneCustomer } from "../../parser/customer";
import { addOneSupplier } from "../../parser/supplier";
import ListLayout from "../app-layout/list-layout";
import AddUser from "./add-user";
import { USER_TYPES } from "../common/constants";
import CustomerList from "../customer/customer-list";
import SupplierList from "../supplier/supplier-list";
import EmployeeList from "../employee/employee-list";

interface ComponentProps {}

const Users: React.FC<ComponentProps> = () => {
  const [closeDrawer, setCloseDrawer] = useState(false);

  const onSubmitEmployee = (values) => {
    addOneEmployee(values)
      .then((res) => {
        toast.success(`${values.name} added successfully`);
        setCloseDrawer(true);
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong with adding Employee");
      });
  };

  const onSubmitCustomer = (values) => {
    addOneCustomer(values)
      .then((res) => {
        toast.success(`${values.name} added successfully`);
        setCloseDrawer(true);
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong with adding customer");
      });
  };

  const onSubmitSupplier = (values) => {
    addOneSupplier(values)
      .then((res) => {
        toast.success(`${values.name} added successfully`);
        setCloseDrawer(true);
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong with adding Supplier");
      });
  };

  return (
    <Tabs defaultActiveKey="customer" className="mb-3">
      <Tab eventKey="customer" title="Customer">
        <ListLayout
          title="customer"
          drawerComponent={
            <AddUser
              onSubmit={onSubmitCustomer}
              userType={USER_TYPES.CUSTOMER}
            />
          }
          listComponent={<CustomerList />}
          closeDrawer={closeDrawer}
        />
      </Tab>
      <Tab eventKey="supplier" title="Supplier">
        <ListLayout
          title="supplier"
          drawerComponent={
            <AddUser
              onSubmit={onSubmitSupplier}
              userType={USER_TYPES.SUPPLIER}
            />
          }
          listComponent={<SupplierList />}
          closeDrawer={closeDrawer}
        />
      </Tab>
      <Tab eventKey="employee" title="Employee">
        <ListLayout
          title="employee"
          drawerComponent={
            <AddUser
              onSubmit={onSubmitEmployee}
              userType={USER_TYPES.EMPLOYEE}
            />
          }
          listComponent={<EmployeeList />}
          closeDrawer={closeDrawer}
        />
      </Tab>
    </Tabs>
  );
};

export default Users;
