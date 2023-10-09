import { createReducer } from "@reduxjs/toolkit";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../actions/product.actions";
import { IState } from "../store/store.types";

const initialState: IState = {
  productList: [],
  loading: false,
  error: "",
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchProductsSuccess, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
      state.error = "";
    })
    .addCase(fetchProductsFailure, (state, action) => {
      state.loading = false;
      state.productList = [];
      state.error = action.payload;
    });
});

export default dataReducer;
