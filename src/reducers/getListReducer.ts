import { DataState, DataAction, selectedDataAction, } from "../interface/getList.interface";

const initialState: DataState = {
  data: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  selectedData: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const SelectedDataReducer = (state = initialState, action: selectedDataAction): DataState => {
  switch (action.type) {
    case "SET_SELECTED_DATA":
      return {
        ...state,
        selectedData: action.payload,
      };
    default:
      return state;
  }
};

