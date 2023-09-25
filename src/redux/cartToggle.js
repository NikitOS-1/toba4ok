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

export const { toggleMenu } = cartToggle.actions;
export default cartToggle.reducer;
