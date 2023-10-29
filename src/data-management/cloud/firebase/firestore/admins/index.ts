import {
  getDocument,
  getDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from "../";
import { ADMINS_COLLECTION } from "../../../../../ui/common/constants/collections";

export const getAdmin = async (id: string) => {
  return await getDocument(ADMINS_COLLECTION, id);
};

export const getAdmins = async () => {
  return await getDocuments(ADMINS_COLLECTION);
};

export const addAdmin = async (data: any) => {
  return await addDocument(ADMINS_COLLECTION, data);
};

export const updateAdmin = async (id: string, data: any) => {
  return await updateDocument(ADMINS_COLLECTION, id, data);
};

export const deleteAdmin = async (id: string) => {
  return await deleteDocument(ADMINS_COLLECTION, id);
};
