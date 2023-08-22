import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import {dataReducer, SelectedDataReducer} from './getListReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  login: loginReducer,
  view: viewReducer,
  selectedData: SelectedDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
