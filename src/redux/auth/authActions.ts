import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthActionTypes } from "./authActionTypes";
import { AuthSuccess } from "./authModel";
import { setAuthLoading, setAuth } from "./authSlice";

export const createAccount = createAsyncThunk(AuthActionTypes.signup, async (cred: object, { dispatch }) => {
  dispatch(setAuthLoading(true));
  // Call API and get token;
  const userObj = {
    user: {
      email: cred.email,
      firstName: cred.firstName,
      lastName: cred.lastname
    },
    refreshToken: "token"
  } as AuthSuccess;
  setAuth(userObj);
  dispatch(setAuthLoading(false));
});
