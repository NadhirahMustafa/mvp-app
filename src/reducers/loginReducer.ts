import {
  LoginAction,
  LoginState,
  UserAction,
} from "../interface/login.interface";

const initialState: LoginState = {
  isLoggedIn: false,
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    maidenName: "",
    age: 0,
    gender: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: 0,
    weight: 0,
    eyeColor: "",
    hair: [],
    domain: "",
    ip: "",
    address: [],
    macAddress: "",
    university: "",
    bank: [],
    company: [],
    ein: "",
    ssn: "",
    userAgent: "",
  },
};

export const loginReducer = (
  state = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export const currentUserReducer = (
  state = initialState,
  action: UserAction
): LoginState => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
