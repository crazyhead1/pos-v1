import {
  getDocument,
  getDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from "../";
import { ORGANISATIONS_COLLECTION } from "../../../../../ui/common/constants/collections";

export const getOrganisation = async (id: string) => {
  return await getDocument(ORGANISATIONS_COLLECTION, id);
};

export const getOrganisations = async () => {
  return await getDocuments(ORGANISATIONS_COLLECTION);
};

export const addOrganisation = async (data: any) => {
  return await addDocument(ORGANISATIONS_COLLECTION, data);
};

export const updateOrganisation = async (id: string, data: any) => {
  return await updateDocument(ORGANISATIONS_COLLECTION, id, data);
};

export const deleteOrganisation = async (id: string) => {
  return await deleteDocument(ORGANISATIONS_COLLECTION, id);
};
