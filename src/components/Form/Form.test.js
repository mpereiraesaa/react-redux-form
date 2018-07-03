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

  it("Should call getInput after any change to the input by user", ()=> {
    component.find("input[name='email']").simulate('change', { target: { value: "lol@lol.es"}});

    expect(initialProps.getInput).toHaveBeenCalledTimes(1);
  });

  it("Should call onSubmit", () => {
    component.find("button").props().onClick();

    expect(initialProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
