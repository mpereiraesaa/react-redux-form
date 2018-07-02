import React from "react";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form component", () => {
  let component;

  const initialProps = {
    getInput: jest.fn(),
    onFocusOut: jest.fn(),
    onSubmit: jest.fn(),
    isProcessing: false,
    message: "",
    formRef: {},
    errors: {}
  }

  beforeEach(() => {
    component = shallow(<Form {...initialProps} />);
  });

  it("Should render component and initialize it", () => {
    expect(component.length).toEqual(1);
  });
});
