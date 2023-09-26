import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const cartToggle = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.isOpen = state.isOpen ? false : true;
    },
  },
});

export const { toggleCart } = cartToggle.actions;
export default cartToggle.reducer;
