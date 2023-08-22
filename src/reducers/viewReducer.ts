import { SetViewAction, ViewState } from "../interface/view.interface";

const initialState: ViewState = {
    viewType: 'GRID',
};

const viewReducer = (state = initialState, action: SetViewAction): ViewState => {
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export default viewReducer;
