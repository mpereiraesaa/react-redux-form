import React from "react";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import { ListContainer } from "./ListContainer";
import { mockEvents } from "./__mocks__/list.mock";
import { getEvents } from "../../api/list";

jest.mock("../../api/list", () => {
  return {
    ...require.requireActual("../../api/list"),
    getEvents: () => Promise.resolve(mockEvents)
  };
});

describe("ListContainer form component", () => {
  let container;

  const fetchList = jest.fn();

  beforeEach(() => {
    container = shallow(<ListContainer isLoading={false} data={mockEvents} fetchList={fetchList} />);
  });

  it("Should render container component and initialize it", () => {
    expect(container.length).toEqual(1);
  });

  it("isLoading should have a false value by default", () => {
    expect(container.props().isLoading).toEqual(false);
  });

  it("It should call fetchList func during lifecycle", async () => {
    expect(fetchList).toBeCalled();
  });
});
