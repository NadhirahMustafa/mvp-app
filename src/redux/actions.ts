import { ToggleLoginAction } from "../interface/login.interface";
import { GetDataAction } from "../interface/getList.interface";
import { dataInterface } from "../interface/product.interface";

export const toggleLogin = (): ToggleLoginAction => ({
  type: 'TOGGLE_LOGIN',
});

export const setData = (data: dataInterface): GetDataAction => ({
  type: 'SET_DATA',
  payload: data,
});
