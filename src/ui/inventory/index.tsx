import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import toast from "react-hot-toast";
import { addOneArea } from "../../parser/area";
import { addOneCategory } from "../../parser/categories";
import { addOneCustomer } from "../../parser/customer";
import { addOneEmployee } from "../../parser/employee";
import { addOneSalesRoute } from "../../parser/sales-route";
import { addOneSupplier } from "../../parser/supplier";
import { addtown } from "../../parser/town";
import AddNewInventory from "./add-new-inventory";
import InventoryList from "./inventory-list";
import { useStylesFromThemeFunction, ComponentProps } from "./Inventory";
// import "boxicons";
import { Drawer } from "../common/components/drawer/Drawer";
import ButtonComponent from "../common/components/button-component";
import { Text } from "../common/components/typography";
import { btnType } from "../common/components/button-component/ButtonComponent.types";

const Inventory: React.FC<ComponentProps> = ({}) => {
  const classes = useStylesFromThemeFunction();
  // const [activeTab,setActiveTab] = useState('pos');
  // const [showSidebar, setShowSidebar] = useState(true);
  const [showAddInventoryDrawer, setShowAddInventoryDrawer] = useState(false);
  // const onSubmitSupplier = (values,{resetForm})=>{
  //     addOneSupplier(values).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding supplier');
  //       });
  // }
  // const onSubmitCustomer = (values,{resetForm})=>{
  //     addOneCustomer(values).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding customer');
  //       });
  // }
  // const onSubmitTown = (values,{ resetForm })=>{
  //     addtown(values).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding town');
  //       });
  // }
  // const onSubmitArea = (values,{resetForm})=>{
  //     addOneArea(values).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding area');
  //       });
  // }
  // const onSubmitSalesRoute = (values,{resetForm})=>{
  //     addOneSalesRoute(values).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding route');
  //       });
  // }
  // const onSubmitCategory = (values,{resetForm})=>{
  //     addOneCategory(values,values.type).then(res => {
  //         toast.success(`${values.name} added successfully`);
  //         resetForm();
  //       }).catch(err => {
  //         toast.error(err.message || 'Something went wrong with adding category');
  //       });
  // }
  // const onSubmitEmployee = (values,{resetForm})=>{
  //   addOneEmployee(values).then(res => {
  //     toast.success(`${values.name} added successfully`);
  //     resetForm();
  //   }).catch(err => {
  //     toast.error(err.message || 'Something went wrong with adding employee');
  //   });
  // }
  // const products = [
  //     {
  //       id: "qwertyuiop",
  //       name: 'Product 1',
  //       unitPrice: 10,
  //       unitsInStock: 10,
  //     },
  //     {
  //       id: "asdfghjkl",
  //       name: 'Product 2',
  //       unitPrice: 20,
  //       unitsInStock: 20,
  //     },
  //     {
  //       id: "zxcvbnm",
  //       name: 'Product 3',
  //       unitPrice: 30,
  //       unitsInStock: 30,
  //     }
  //   ];

  // const renderComponent = (key: string) =>{
  //   switch (key) {
  //     case "add":
  //       return <AddNewInventory />;
  //     break;
  //     case "list":
  //       return <InventoryList />;
  //     break;
  //     case "POS":
  //       return <POSEngine/>;
  //     break;
  //     case "supplier":
  //       return <SupplierForm onSubmit={onSubmitSupplier}/>;
  //     break;
  //     case "customer":
  //       return <CustomerForm onSubmit={onSubmitCustomer}/>;
  //     break;
  //     case "town":
  //       return <TownForm onSubmit={onSubmitTown}/>;
  //     break;
  //     case "area":
  //       return <AreaForm onSubmit={onSubmitArea}/>;
  //     break;
  //     case "salesRoute":
  //       return <SalesRouteForm onSubmit={onSubmitSalesRoute}/>;
  //     break;
  //     case "category":
  //       return <CategoryForm onSubmit={onSubmitCategory}/>;
  //     break;
  //     case "employee":
  //       return <EmployeeForm onSubmit={onSubmitEmployee}/>;
  //     break;
  //     default:
  //       break;
  //   }
  // }
  const toggleDrawer = () => {
    setShowAddInventoryDrawer(!showAddInventoryDrawer);
  };
  return (
    <>
      <ButtonComponent onClick={toggleDrawer} variant={btnType.PRIMARY}>
        <Text>Add Item</Text>
      </ButtonComponent>
      <Drawer
        onClose={toggleDrawer}
        open={showAddInventoryDrawer}
        subTitle="Add new item to inventory"
        title="Add Inventory"
      >
        <AddNewInventory />
      </Drawer>
      <InventoryList />
    </>
    // <Tabs defaultActiveKey="add" className="mb-3">
    //   <Tab eventKey="add" title="Add Product" onClick={toggleDrawer}>

    //   </Tab>
    //   <Tab eventKey="list" title="Inventory">
    //   </Tab>
    // </Tabs>
  );
};

export default Inventory;
