import { LoginAction, LoginState } from "../interface/login.interface";

const initialState: LoginState = {
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export default loginReducer;
