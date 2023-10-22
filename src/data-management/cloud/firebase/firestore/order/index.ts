import {
  getDocument,
  getDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
  dbTransaction,
} from "../";
import { ORDERS_COLLECTION } from "../../../../../ui/common/constants/collections";
import { firebaseFirestore } from "../../../../../services";

export const getOrder = async (id: string) => {
  return await getDocument(ORDERS_COLLECTION, id);
};

export const getOrders = async () => {
  const orders = await getDocuments(ORDERS_COLLECTION);
  return orders.map((order) => ({ ...order.data(), ref: order.ref }));
};

export const addOrder = async (data: any) => {
  const firebaseInstance = firebaseFirestore.getInstance();
  await dbTransaction(firebaseInstance, async (transaction) => {
    const docRefsWithQuantities = await Promise.all(
      data.products.map(async (product) => {
        const sfDoc = await transaction.get(product.ref);
        if (!sfDoc.exists()) {
          console.log("Document does not exist!");
          transaction.set(product.ref, product);
          return;
        }
        const newQuantity =
          (sfDoc as any).data().unitsInStock - parseInt(product.quantity, 10);
        data.unitsInStock = newQuantity;
        return {
          ref: product.ref,
          unitsInStock: newQuantity,
        };
      })
    );
    docRefsWithQuantities.forEach((docRefWithQuantity) => {
      console.log({ docRefWithQuantity });
      transaction.update(docRefWithQuantity.ref, {
        unitsInStock: docRefWithQuantity.unitsInStock,
      });
    });
  });
  return await addDocument(ORDERS_COLLECTION, data);
};

export const updateOrder = async (id: string, data: any) => {
  return await updateDocument(ORDERS_COLLECTION, id, data);
};

export const deleteOrder = async (id: string) => {
  return await deleteDocument(ORDERS_COLLECTION, id);
};
