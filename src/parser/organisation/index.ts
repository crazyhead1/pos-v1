import {
  addOrganisation,
  deleteOrganisation,
  getOrganisations,
  updateOrganisation,
} from "../../data-management/cloud/firebase/firestore/organisation";

// Get Organisations from inventory
export const getAllOrganisations = async () => {
  const organisations = await getOrganisations();
  return organisations.map((organisation) => organisation.data());
};

// Add an Organisation to inventory
export const addOneOrganisation = async (organisation: any) => {
  const organisationAdded = await addOrganisation(organisation);
  return organisationAdded;
};

// Delete an Organisation API
export const deleteOneOrganisation = async (id: string) => {
  const organisationDeleted = await deleteOrganisation(id);
  return organisationDeleted;
};

// Edit an Organisation API
export const editOrganisation = async (id: string, organisation: any) => {
  const organisationEdited = await updateOrganisation(id, organisation);
  return organisationEdited;
};
