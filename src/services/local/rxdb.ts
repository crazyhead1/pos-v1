import { RxCollection, addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { createRxDatabase } from "rxdb";
import { RxDBLocalDocumentsPlugin } from "rxdb/plugins/local-documents";
addRxPlugin(RxDBLocalDocumentsPlugin);
const DB_NAME = "posdb";

export const posDB = await createRxDatabase({
  name: DB_NAME,
  storage: getRxStorageDexie(),
  localDocuments: true,
});

export const getDocumentReference = async (
  collection: RxCollection,
  docId: string
) => {
  return await collection.findOne(docId).exec();
};

export const getDocumentsReferences = async (collection: RxCollection) => {
  return await collection.find().exec();
};

export const addDocument = async (collection: RxCollection, payload: any) => {
  return await collection.insert(payload);
};

export const updateDocument = async (
  collection: RxCollection,
  docId: string,
  payload: any
) => {
  const doc = await getDocumentReference(collection, docId);
  return await doc.update({
    // $inc: {
    //     age: 1 // increases age by 1
    // },
    $set: payload,
  });
};

export const removeDocument = async (
  collection: RxCollection,
  docId: string
) => {
  const doc = await getDocumentReference(collection, docId);
  return await doc.remove();
};

export const getDocumentByIdJSON = async (
  collection: RxCollection,
  docId: string
) => {
  const doc = await getDocumentReference(collection, docId);
  return await doc.toJSON();
};
export const getDocumentsJSON = async (collection: RxCollection) => {
  const docs = await getDocumentsReferences(collection);
  return docs.map((doc) => doc.toJSON());
};
