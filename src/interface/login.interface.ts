export interface LoginState {
  isLoggedIn: boolean;
}

export interface ToggleLoginAction {
  type: "TOGGLE_LOGIN";
}

export type LoginAction = ToggleLoginAction;
