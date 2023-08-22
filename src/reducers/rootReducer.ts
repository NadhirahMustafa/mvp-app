import { combineReducers } from 'redux';
import {loginReducer, currentUserReducer} from './loginReducer';
import {dataReducer, selectedDataReducer} from './getListReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  login: loginReducer,
  view: viewReducer,
  selectedData: selectedDataReducer,
  currentUser: currentUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
