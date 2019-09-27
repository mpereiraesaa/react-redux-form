import { USER_INPUT_RECEIVED, SET_ERROR_INPUT, CLEAR_ERROR, LOAD_FIELDS, SET_AS_VALIDATED } from "../actions/form";
import { validateFunc } from "../../../utils/functions";

export const setErrors = (errors) => {
  return {
    type: SET_ERROR_INPUT,
    data: errors
  }
}

export const setInput = (data) => {
  return {
    type: USER_INPUT_RECEIVED,
    data
  };
}

export const clearError = (name) => {
    return {
        type: CLEAR_ERROR,
        name
    };
}

export const loadFields = (formList) => {
    return {
        type: LOAD_FIELDS,
        formList
    };
}

export const setAsValidated = () => {
    return {
        type: SET_AS_VALIDATED
    };
}

export const validateFields = (formData) => {
  return function(dispatch) {
    let errors = {};

    for (const field in formData) {
      errors = {...errors, ...validateFunc({ name: field, value: formData[field] })};
    }

    dispatch(setErrors(errors));
  }
}

export const receiveUserInput = (data) => {
  return function(dispatch) {
    const { name } = data;
    const error = validateFunc(data);
    if (error[data.name]) {
        dispatch(setErrors(error));
    } else {
        dispatch(clearError(name));
    }
    dispatch(setInput({ [name]: data.value }));
  }
}

export const validateInput = (data) => {
    return function(dispatch) {
        const error = validateFunc(data);
        if (error[data.name]) {
            dispatch(setErrors(error));
        } else {
            dispatch(clearError(data.name));
        }
    }
}
