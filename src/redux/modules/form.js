import { USER_INPUT_RECEIVED, SET_ERROR_INPUT, USER_INPUT_VALIDATE } from "./actions/form";

const initialState = {
  isValidated: false,
  data: {},
  errors: {}
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT_RECEIVED:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data
        }
      };
    case SET_ERROR_INPUT:
      return {
        ...state,
        errors: action.data
      };
    case USER_INPUT_VALIDATE:
      return {
        ...state,
        isValidated: action.data
      };
    default:
      return state;
  }
}
