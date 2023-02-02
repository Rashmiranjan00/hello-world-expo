import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthActionTypes } from "./authActionTypes";
import { setAuthLoading } from "./authSlice";

export const createAccount = createAsyncThunk(AuthActionTypes.signup, async (cred: object, { dispatch }) => {
  dispatch(setAuthLoading(true));
  dispatch(setAuthLoading(false));

  return {
    email: cred.email,
    refreshToken: cred.refreshToken,
    firstName: cred.firstName,
    lastName: cred.lastName
  };
});
