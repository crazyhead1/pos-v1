import React from "react";
import toast from "react-hot-toast";
import { addOneOrganisation } from "../../parser/organisation";
import ButtonComponent from "../common/components/button-component";
import OrganisationForm from "./organisation-form";
import OrganisationList from "./organisation-list";

const Organisation = () => {
  const [showOrganisationList, setShowOrganisationList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowOrganisationList(!showOrganisationList);
  };

  const onSubmitOrganisation = (values, { resetForm }) => {
    addOneOrganisation(values)
      .then((res) => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowOrganisationList(!showOrganisationList);
      })
      .catch((err) => {
        toast.error(
          err.message || "Something went wrong with adding organisation"
        );
      });
  };
  return (
    <div>
      <ButtonComponent onClick={handleAddNewClick}>
        {showOrganisationList ? <p>Add New</p> : <p>Back</p>}
      </ButtonComponent>
      {showOrganisationList ? (
        <OrganisationList />
      ) : (
        <OrganisationForm onSubmit={onSubmitOrganisation} />
      )}
    </div>
  );
};

export default Organisation;
