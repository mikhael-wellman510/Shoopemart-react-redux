import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "mikhael",
  password: "mikhael28",
};

export const sliceLogin = createSlice({
  name: "validation",
  initialState,
  reducers: {},
});

export const {} = sliceLogin.actions;
export default sliceLogin.reducer;
