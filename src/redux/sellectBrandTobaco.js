import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
};

const sellectBrandTobaco = createSlice({
  name: "sellectBrandTobaco",
  initialState,
  reducers: {
    sellectBrand: (state, action) => {
      state.brand = action.payload;
    },
    deleteBrand: (state) => {
      state.brand = "";
    },
  },
});

export const { sellectBrand, deleteBrand } = sellectBrandTobaco.actions;

export default sellectBrandTobaco.reducer;
