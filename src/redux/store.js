import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
  },
});
