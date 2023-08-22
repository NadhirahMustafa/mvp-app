export interface ViewState {
    viewType: string;
  }
  
  export interface SetViewAction {
    type: "SET_VIEW";
    payload: string;
  }
  
  export type ViewAction = SetViewAction;
  