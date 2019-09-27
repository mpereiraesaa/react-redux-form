import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import App from "./App";

describe("App main component", () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    form: {
      isValidated: false,
      data: {},
      errors: {}
    },
    list: {
      data: [],
      isFetchingList: false,
      fetchErrorMessage: ""
    }
  };

  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(<App />, {
      context: { store },
      childContextTypes: {
        store: PropTypes.object.isRequired
      }
    });
  });

  it("Should render container component and initialize it", () => {
    expect(container.length).toEqual(1);
  });
});
