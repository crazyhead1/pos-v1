import {
  getInventories,
  getInventory,
  addInventory,
  deleteInventory,
  updateInventory,
  getInventoryProductDocRef,
} from "../../data-management/cloud/firebase/firestore/inventory";

// get products from inventory
export const getProductsFromInventory = async () => {
  const products = await getInventories();
  console.log({ products });
  return products.map((product) => ({ ...product.data(), ref: product.ref }));
};

// get products from inventory
export const getProductByIdFromInventory = async (docId: string) => {
  const product = await getInventory(docId);
  return product;
};
// get products from inventory
export const getProductRefByIdFromInventory = async (docId: string) => {
  const productRef = await getInventoryProductDocRef(docId);
  return productRef;
};

export const getProductRefByIdFromInventoryByFirebaseInstance = async (
  docId: string,
  firebaseInstance
) => {
  const productRef = await getInventoryProductDocRef(docId);
  return productRef;
};

// add product in inventory
export const addProductIntoInventory = async (product: any) => {
  const productAdded = await addInventory(product);
  return productAdded;
};
//delete product api
export const deleteProductFromInventory = async (id: string) => {
  const productDeleted = await deleteInventory(id);
  return productDeleted;
};
//edit product api
export const editProductFromInventory = async (id: string, product: any) => {
  const productEdited = await updateInventory(id, {
    ...product,
    updatedAt: new Date().getTime().toString(),
  });
  return productEdited;
};
