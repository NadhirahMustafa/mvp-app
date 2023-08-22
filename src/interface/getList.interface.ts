import { dataInterface, selectedDataProps } from "./product.interface";
export interface DataState {
  data: dataInterface;
  selectedData: selectedDataProps;
}

export interface GetDataAction {
  type: "SET_DATA";
  payload: dataInterface;
}

export interface GetSelectedDataAction {
  type: "SET_SELECTED_DATA";
  payload: selectedDataProps;
}

export type DataAction = GetDataAction;
export type selectedDataAction = GetSelectedDataAction;
