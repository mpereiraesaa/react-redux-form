import React from "react";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import ListItem from "./ListItem";

describe("ListItem component", () => {
  let component;

  const initialProps = {
    event: {
      email: "manuelpereiralds@gmail.com",
      first_name: "Manuel",
      last_name: "Pereira",
      event_date: "2018-05-12"
    }
  };

  beforeEach(() => {
    component = shallow(<ListItem {...initialProps} />);
  });

  it("Should render component and initialize it", () => {
    expect(component.length).toEqual(1);
  });
});
