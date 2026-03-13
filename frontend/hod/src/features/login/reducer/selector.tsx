
import type { RootState } from "../../../store/store";

export const selectAuth = (state: RootState) => state.login;

export const selectIsAuthenticated = (state: RootState) =>
  state.login.isAuthenticated;

export const selectUser = (state: RootState) => state.login.user;

export const selectToken = (state: RootState) => state.login.token;