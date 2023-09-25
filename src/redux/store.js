import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";
import modalReducer from "./modalReducer";
import userData from "./userData";
import sellectBrandTobaco from "./sellectBrandTobaco";
import dataProduct from "./dataProduct";
import cartToggle from "./cartToggle";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
    cartToggle: cartToggle,
    modal: modalReducer,
    user: userData,
    sellectBrand: sellectBrandTobaco,
    dataProduct: dataProduct,
  },
});
