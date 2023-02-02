export interface AuthSliceState {
  refreshToken?: string;
  loading?: boolean;
  user: AuthUser;
}

export interface AuthSuccess {
  refreshToken?: string;
  user: AuthUser;
}

export interface AuthUser {
  email?: string;
  firstName?: string;
  lastName?: string;
}
