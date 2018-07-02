import * as actions from "./actions/list";
import * as reducer from "./list";
import { mockEvents } from "../../components/List/__mocks__/mocks.js";

const initialState = {
  data: [],
  isFetchingList: false,
  fetchErrorMessage: ""
};

describe("List reducer", () => {
  it("Should return initialState", () => {
    expect(reducer.default(undefined, {})).toEqual(initialState);
  });

  it("Should handle the fetch success", () => {
    const action = {
      type: actions.LIST_FETCH_SUCCESS,
      data: mockEvents
    };

    expect(reducer.default(undefined, action)).toEqual({...initialState, data: mockEvents});
  });
});
