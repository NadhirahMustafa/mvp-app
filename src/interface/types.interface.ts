export interface AppState {
    isLoggedIn: boolean;
  }
  
  export interface ToggleLoginAction {
    type: 'TOGGLE_LOGIN';
  }
  
  export type AppAction = ToggleLoginAction;
  