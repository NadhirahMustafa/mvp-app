import { ToggleLoginAction } from "../interface/login.interface";
import { GetDataAction } from "../interface/getList.interface";
import { dataInterface } from "../interface/product.interface";
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
