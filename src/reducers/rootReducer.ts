import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dataReducer from './getListReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  login: loginReducer,
  view: viewReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
