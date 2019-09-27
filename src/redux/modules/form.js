import { getObjectLength } from "../../utils/functions";
import { USER_INPUT_RECEIVED, SET_ERROR_INPUT, USER_INPUT_VALIDATE, CLEAR_ERROR, LOAD_FIELDS, SET_AS_VALIDATED } from "./actions/form";

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
        const errors = { ...state.errors, ...action.data };
        return {
            ...state,
            errors,
            isValidated: getObjectLength(errors) === 0
        };
    case CLEAR_ERROR:
        const keys = Object.keys(state.errors);
        const newErrors = keys.reduce((acc, key) => { if (action.name !== key) { acc[key] = state.errors[key]; } return acc; }, {});
        return {
            ...state,
            errors: newErrors,
            isValidated: getObjectLength(newErrors) === 0
        };
    case LOAD_FIELDS:
        const data = action.formList.reduce((acc,field) => { acc[field.name] = ''; return acc; }, {});
        return {
            ...state,
            data
        }
    case SET_AS_VALIDATED:
        return {
            ...state,
            isValidated: true
        };
    default:
      return state;
  }
}
