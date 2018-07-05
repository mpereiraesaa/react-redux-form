import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import sinon from "sinon";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import FormContainer from "./FormContainer";
import * as types from '../../redux/modules/actions/form';

const mockStore = configureStore([thunk]);
const dispatch = sinon.spy();

describe("FormContainer integration test with redux", () => {
  let reducer = {
    form: {
      isValidated: false,
      data: {},
      errors: {}
    }
  };

  let store, container;

  beforeEach(() => {
    store = mockStore(reducer);
    container = mount(<FormContainer dispatch={dispatch} store={store} />)
  });

  it("Should render container component and initialize it", () => {
    expect(container.length).toEqual(1);
  });

  it("Should dispatch the right action after user input", () => {
    const mockedEvent = { value: "Random", name: "first_name", type: "text"};

    container.find("input[name='first_name']").simulate("change", { target: mockedEvent});

    const expectedAction = {
      type: types.USER_INPUT_RECEIVED,
      data: { first_name: "Random" }
    };

    expect(store.getActions()[1]).toEqual(expectedAction);
  });

});
