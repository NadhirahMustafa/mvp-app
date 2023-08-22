import { ToggleLoginAction } from "../interface/types.interface";

export const toggleLogin = (): ToggleLoginAction => ({
  type: 'TOGGLE_LOGIN',
});
