import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import { FormContainer } from "./FormContainer";

describe("FormContainer form component", () => {
  const formValid = {
    addToList: jest.fn(),
    setupFields: jest.fn(),
    validateInput: jest.fn(),
    validateFields: jest.fn(),
    receiveUserInput: jest.fn(),
    isValidated: true,
    formData: {
      first_name: "Manuel",
      last_name: "Pereira",
      email: "test@testing.com",
      event_date: "10-10-2018"
    },
    errors: {}
  };

  let container;

  beforeEach(() => {
    container = mount(<FormContainer {...formValid} />)
  });

  it("Should render container component and initialize it", () => {
    expect(container.length).toEqual(1);
  });
});
