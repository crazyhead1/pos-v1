import React from "react";
import InventoryForm from "../Inventory-form";

interface ComponentProps {
  onSubmit: (values) => void;
}

const AddNewInventory: React.FC<ComponentProps> = ({ onSubmit }) => {
  // const onImageChange = (images) => {};

  return (
    <div>
      <InventoryForm
        onSubmit={(data: any) => onSubmit(data)}
        // onImageChange={onImageChange}
      />
    </div>
  );
};

export default AddNewInventory;
