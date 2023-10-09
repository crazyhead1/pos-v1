import {
  getOrders,
  addOrder,
  deleteOrder,
  updateOrder,
} from "../../data-management/cloud/firebase/firestore/order";

// get orders from POS
export const getOrdersFromPOS = async () => {
  const orders = await getOrders();
  return orders.map((order) => order.data());
};

// add order in POS
export const addOrderIntoPOS = async (order: any) => {
  return await addOrder(order);
};
//delete order api
export const deleteOrderFromPOS = async (id: string) => {
  const orderDeleted = await deleteOrder(id);
  return orderDeleted;
};
//edit order api
export const editOrderFromPOS = async (id: string, order: any) => {
  const orderEdited = await updateOrder(id, order);
  return orderEdited;
};
