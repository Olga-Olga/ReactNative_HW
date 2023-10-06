import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, registerThunk } from "./authOperations";

const initialState = {
  user: {},
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(logInThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const userReducer = authSlice.reducer;
