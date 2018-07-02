import React from "react";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import Error from "./Error";

describe("Error component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Error>test</Error>);
  });

  it("Should render component and initialize it", () => {
    expect(component.length).toEqual(1);
  });

  it("Should have children prop sample being rendered as the error message", () => {
    expect(component.find(".error").text()).toEqual("test");
  });
});
