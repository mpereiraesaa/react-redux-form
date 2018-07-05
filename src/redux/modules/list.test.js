import * as actions from "./actions/list";
import * as reducer from "./list";
import { mockEvents } from "../../components/List/__mocks__/list.mock";

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

  it("Should handle the isLoading state", () => {
    const action = {
      type: actions.IS_FETCH_LOADING
    };

    expect(reducer.default(undefined, action)).toEqual({...initialState, isFetchingList: true});
  });

});
