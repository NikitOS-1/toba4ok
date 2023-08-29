import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalReducer = createSlice({
  name: "toggleModalReducer",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = modalReducer.actions;

export const isOpen = (state) => state.modal.isOpen;

export default modalReducer.reducer;
