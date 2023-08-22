import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dataReducer from './getListReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
