import { RootState } from "../store";
import { AuthSliceState, AuthUser } from "./authModel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectSecure = (x: RootState): any => x.secure || {};

const selectAuth = (x: RootState): AuthSliceState => selectSecure(x).auth || {};

export const selectLoading = (x: RootState): boolean => selectAuth(x).loading || false;

export const selectUser = (x: RootState): AuthUser => selectAuth(x).user;
