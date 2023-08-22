import { DataState, DataAction } from '../interface/getList.interface';

const initialState: DataState = {
  data: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
};

const dataReducer = (
  state = initialState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
