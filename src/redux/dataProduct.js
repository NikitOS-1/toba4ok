import { createSlice } from "@reduxjs/toolkit";
import { brandTobaco } from "./data_BrandTobaco";

const initialState = {
  data: brandTobaco,
};

const dataProduct = createSlice({
  name: "dataProduct",
  initialState,
  reducers: {},
});

export const {} = dataProduct.actions;
export default dataProduct.reducer;
