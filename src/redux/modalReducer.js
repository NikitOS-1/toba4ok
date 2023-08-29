import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalReducer = createSlice({
  name: "toggleModalReducer",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = state.isOpen ? false : true;
    },
  },
});

export const { toggleModal } = modalReducer.actions;
export default modalReducer.reducer;
