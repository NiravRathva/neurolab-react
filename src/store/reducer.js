import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  mobileNumber: "",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    SET_NAME: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.name = action.payload;
    },
    SET_EMAIL: (state, action) => {
      state.email= action.payload;
    },
    SET_MOBILENO: (state, action) => {
        state.mobileNumber= action.payload;
    },
  },
});
export const { SET_NAME, SET_EMAIL, SET_MOBILENO } = contactSlice.actions

export default contactSlice.reducer