import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import List from "./List";
import { mockEvents } from "./__mocks__/list.mock";
import MDSpinner from "react-md-spinner";
import ListItem from "./ListItem";

describe("List component", () => {
  let component;

  const initialProps = {
    data: mockEvents,
    isLoading: true,
    message: ""
  }

  beforeEach(() => {
    component = mount(<List {...initialProps} />);
  });

  it("Should render component and initialize it", () => {
    expect(component.length).toEqual(1);
  });

  it("Should render a loading bar inside list container div", () => {
    expect(component.find(MDSpinner).length).toEqual(1);
  });

  it("Should render the mock events", () => {
    component.setProps({ isLoading: false });

    expect(component.props().isLoading).toEqual(false);
    expect(component.find(ListItem).length).toEqual(3);
  });

  it("If error message, then it should render a message", () => {
    component.setProps({ isLoading: false, message: "ERROR PAPA", data: [] });

    expect(component.props().message).toEqual("ERROR PAPA");
    expect(component.text()).toEqual("ERROR PAPA");
  });
});
