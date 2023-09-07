import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";
import modalReducer from "./modalReducer";
import userData from "./userData";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
    modal: modalReducer,
    user: userData,
  },
});
