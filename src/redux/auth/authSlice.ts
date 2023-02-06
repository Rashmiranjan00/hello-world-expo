import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState, AuthSuccess } from "./authModel";

const initialState: AuthSliceState = {
  loading: false,
  user: {
    email: "",
    firstName: "",
    lastName: ""
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthSuccess>) => {
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
        user: {
          email: action.payload.user.email,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName
        }
      };
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      return { ...state, loading: action.payload };
    },
    resetAuth: () => initialState
  }
});

export default authSlice.reducer;
export const { setAuth, setAuthLoading, resetAuth } = authSlice.actions;
