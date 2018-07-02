import * as actions from './form';
import * as types from '../actions/form';

describe('form actions', () => {
  it('should create an action to save user input', () => {
    const mockInput = {};

    const expectedAction = {
      type: types.USER_INPUT_RECEIVED,
      data: mockInput
    };

    expect(actions.setInput(mockInput)).toEqual(expectedAction)
  });

  it('should create an action to save a error object', () => {
    const mockInput = {};

    const expectedAction = {
      type: types.SET_ERROR_INPUT,
      data: mockInput
    };

    expect(actions.setErrors(mockInput)).toEqual(expectedAction)
  });

});
