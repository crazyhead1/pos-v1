import {
  addDocument,
  getDocumentByIdJSON,
  getDocumentsJSON,
  posDB,
  removeDocument,
  updateDocument,
} from "../../rxdb";

const addCollection = async () => {
  return await posDB.addCollections({
    orders: {
      schema: ordersSchema,
      localDocuments: true,
    },
  });
};

export const addOrder = async (payload: any) => {
  return await addDocument(posDB.orders, payload);
};

export const updateOrder = async (docId: string, payload: any) => {
  return await updateDocument(posDB.orders, docId, payload);
};

export const removeOrder = async (docId: string) => {
  return await removeDocument(posDB.orders, docId);
};

export const getOrderByIdJSON = async (docId: string) => {
  return await getDocumentByIdJSON(posDB.orders, docId);
};
export const getOrdersJSON = async () => {
  return await getDocumentsJSON(posDB.orders);
};
