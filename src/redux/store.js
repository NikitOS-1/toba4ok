import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";
import modalReducer from "./modalReducer";
import userData from "./userData";
import sellectBrandTobaco from "./sellectBrandTobaco";
import dataProduct from "./dataProduct";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
    modal: modalReducer,
    user: userData,
    sellectBrand: sellectBrandTobaco,
    dataProduct: dataProduct,
  },
});
