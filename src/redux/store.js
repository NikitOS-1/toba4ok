import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";
import modalReducer from "./modalReducer";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
    modal: modalReducer,
  },
});
