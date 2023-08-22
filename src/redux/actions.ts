import { ToggleLoginAction, CurrentUserAction } from "../interface/login.interface";
import { GetDataAction, GetSelectedDataAction } from "../interface/getList.interface";
import { dataInterface, selectedDataInterface, userDetailsInterface } from "../interface/product.interface";
import { SetViewAction } from "../interface/view.interface";

export const toggleLogin = (): ToggleLoginAction => ({
  type: "TOGGLE_LOGIN",
});

export const setData = (data: dataInterface): GetDataAction => ({
  type: "SET_DATA",
  payload: data,
});

export const setView = (view: string): SetViewAction => ({
  type: "SET_VIEW",
  payload: view,
});

export const setSelectedData = (selectedData: selectedDataInterface): GetSelectedDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});

export const setCurrentUser = (currentUser: userDetailsInterface): CurrentUserAction => ({
  type: "SET_CURRENT_USER",
  payload: currentUser,
});