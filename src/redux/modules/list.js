import { LIST_FETCH_SUCCESS, IS_FETCH_LOADING, FETCH_FAILED, ADD_TO_LIST } from "./actions/list";

const initialState = {
  data: [],
  isFetchingList: false,
  fetchErrorMessage: ""
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case LIST_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case IS_FETCH_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FAILED:
      return {
        ...state,
        message: action.data
      };
    case ADD_TO_LIST:
      return {
        ...state,
        data: [...state.data, action.data]
      };
    default:
      return state;
  }
}
