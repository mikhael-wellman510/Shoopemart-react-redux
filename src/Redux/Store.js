import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./SliceLogin";
import productReducer from "./ProductSlice";
import addKeranjang from "./KeranjangSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    keranjang: addKeranjang,
  },
});
