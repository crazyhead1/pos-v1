import React, { useState } from "react";
import EmployeeForm from "../../employee/employee-form";
import { USER_TYPES } from "../../common/constants";
import CustomerForm from "../../customer/customer-form";
import SupplierForm from "../../supplier/supplier-form";

interface ComponentProps {
  onSubmit: (values) => void;
  userType: USER_TYPES;
}

const AddUser: React.FC<ComponentProps> = ({ onSubmit, userType }) => {
  // const onImageChange = (images) => {};
  const renderView = () => {
    switch (userType) {
      case USER_TYPES.ADMIN:
      case USER_TYPES.SUPER_ADMIN:
      case USER_TYPES.EMPLOYEE:
        return <EmployeeForm onSubmit={(data: any) => onSubmit(data)} />;
      case USER_TYPES.CUSTOMER:
        return <CustomerForm onSubmit={(data: any) => onSubmit(data)} />;
      case USER_TYPES.SUPPLIER:
        return <SupplierForm onSubmit={(data: any) => onSubmit(data)} />;
      default:
        return <EmployeeForm onSubmit={(data: any) => onSubmit(data)} />;
    }
  };
  return <div>{renderView()}</div>;
};

export default AddUser;
