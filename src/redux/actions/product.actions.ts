import { createAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { getProductsFromInventory } from "../../parser/inventory";

// Define action types
export const fetchProducts = createAction("fetch/productsRequest");
export const fetchProductsSuccess = createAction<any>("fetch/productsSuccess");
export const fetchProductsFailure = createAction<string>(
  "fetch/productsFailure"
);

// Async action creator
export const fetchProductList = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProducts());

    try {
      const productsList = await getProductsFromInventory();
      console.log({ productsList });
      dispatch(fetchProductsSuccess(productsList));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
