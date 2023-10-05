import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, registerThunk } from "./operetions";
// email: "",
// password: "",
// login: "",
const initialState = {
  user: {},
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // register: (state, { payload }) => {
    //   state.user = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        // state.token = payload.token;
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
        // state.token = payload.token;
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

