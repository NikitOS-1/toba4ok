import { createSlice } from "@reduxjs/toolkit";
import { dataProductTobac } from "../data/dataProductTobac";

const initialState = {
  data: dataProductTobac,
};

const dataProduct = createSlice({
  name: "dataProduct",
  initialState,
  reducers: {},
});

export const {} = dataProduct.actions;

export default dataProduct.reducer;
