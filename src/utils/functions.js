export const validateFunc = ({name, value, type}) => {
  const errors = {};

  if (!value) {
    errors[name] = 'Required';
  }
  else if (type === "email") {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors[name] = 'Invalid email address';
    }
  }

  return errors
}

export const getObjectLength = obj => Object.keys(obj).length;
