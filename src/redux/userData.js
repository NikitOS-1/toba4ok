import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  tokken: null,
  createTimeAccount: null,
  name: null,
  email: null,
  photo: null,
};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.id = action.payload.id;
      state.tokken = action.payload.tokken;
      state.createTimeAccount = action.payload.createTimeAccount;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    removeUser: (state) => {
      state.id = null;
      state.tokken = null;
      state.createTimeAccount = null;
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { addUser, removeUser } = userData.actions;

export default userData.reducer;
