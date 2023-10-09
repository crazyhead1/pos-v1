// redux/store.ts
import { combineReducers } from "redux";
import productReducer from "../reducers/product.reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  data: productReducer,

  // Add more reducers here
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
