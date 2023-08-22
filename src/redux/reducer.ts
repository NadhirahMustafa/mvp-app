import { AppAction, AppState } from "../interface/types.interface";

const initialState: AppState = {
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action: AppAction): AppState => {
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
