import { dataInterface, selectedDataInterface } from "./product.interface";

export interface DataState {
  data: dataInterface;
  selectedData: selectedDataInterface;
}

export interface GetDataAction {
  type: "SET_DATA";
  payload: dataInterface;
}

export interface GetSelectedDataAction {
  type: "SET_SELECTED_DATA";
  payload: selectedDataInterface;
}

export type DataAction = GetDataAction;
export type selectedDataAction = GetSelectedDataAction;
