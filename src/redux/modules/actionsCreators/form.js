import { USER_INPUT_RECEIVED, SET_ERROR_INPUT, USER_INPUT_VALIDATE } from "../actions/form";
import { validateFunc, getObjectLength } from "../../../utils/functions";

export const setErrors = (errObj) => {
  return {
    type: SET_ERROR_INPUT,
    data: errObj
  }
}

export const isValidated = (errCount) => {
  return {
    type: USER_INPUT_VALIDATE,
    data: !errCount
  }
}

export const setInput = (data) => {
  return {
    type: USER_INPUT_RECEIVED,
    data
  };
}

export const setupFields = (elem) => {
  return function(dispatch) {
    let data = {};

    Array.prototype.slice.call(elem.elements)
      .forEach(elem => { return elem.nodeName === "INPUT" ? data[elem.name] = '' : null });

    dispatch(setInput(data));
  }
}

export const validateFields = (formData) => {
  return function(dispatch) {
    let errors = {};

    for (let field in formData) {
      errors = {...errors, ...validateFunc({ name: field, value: formData[field] })};
    }

    dispatch(setErrors(errors));
    dispatch(isValidated(getObjectLength(errors)));
  }
}

export const receiveUserInput = (data, currentErrors) => {
  return function(dispatch) {
    const errors = validateFunc(data);
    const { name } = data;

    dispatch(setInput({ [name]: data.value }));

    if (!(name in errors)) {
        let newErrors = {...currentErrors};

        delete newErrors[name];

        dispatch(setErrors(newErrors));
        // dispatch(isValidated(getObjectLength(errors)));
    }
    else {
      let newErrors = {...currentErrors, ...errors};

      dispatch(setErrors(newErrors));
    }
  }
}

export const validateInput = (data, currentErrors) => {
  return function(dispatch) {
    const errors = {...currentErrors, ...validateFunc(data)};

    dispatch(setErrors(errors));
    dispatch(isValidated(getObjectLength(errors)));
  }
}
