import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const burgerMenu = createSlice({
  name: "toggleBurgerMenu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = state.isOpen ? false : true;
    },
  },
});

export const { toggleMenu } = burgerMenu.actions;
export default burgerMenu.reducer;
