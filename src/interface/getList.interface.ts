import { dataInterface } from "./product.interface";
export interface DataState {
    data: dataInterface;
  }
  
  export interface GetDataAction {
    type: 'SET_DATA';
    payload: dataInterface;
  }
  
  export type DataAction = GetDataAction;
  