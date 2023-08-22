import { userDetailsInterface } from "./product.interface";

export interface LoginState {
  isLoggedIn: boolean;
  user: userDetailsInterface
}

export interface ToggleLoginAction {
  type: "TOGGLE_LOGIN";
}

export interface CurrentUserAction {
  type: "SET_CURRENT_USER";
  payload: userDetailsInterface;
}

export type LoginAction = ToggleLoginAction;
export type UserAction = CurrentUserAction;
