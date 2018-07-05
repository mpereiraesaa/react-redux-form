import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from "../actions/list";
import * as actionsCreators from "./list";
import { mockEvents } from "../../../components/List/__mocks__/list.mock";
import { getEvents } from "../../../api/list";

const initialState = {
  data: [],
  isFetchingList: false,
  fetchErrorMessage: ""
};

jest.mock("../../../api/list", () => {
  return {
    ...require.requireActual("../../../api/list"),
    getEvents: () => Promise.resolve(mockEvents)
  };
});

const mockStore = configureMockStore([thunk]);

describe("List actions creators to be tested", () => {
  it("Should create an action to set an error", () => {
    const action = {
      type: actions.FETCH_FAILED,
      data: "Error"
    };

    expect(actionsCreators.fetchFailed("Error")).toEqual(action);
  });

  it("Should create an action to set the list as loading", () => {
    const action = {
      type: actions.IS_FETCH_LOADING
    };

    expect(actionsCreators.fetchLoading()).toEqual(action);
  });

  it("Should create an action to set fetch is finished and save the data", () => {
    const action = {
      type: actions.LIST_FETCH_SUCCESS,
      data: mockEvents
    };

    expect(actionsCreators.fetchSuccess(mockEvents)).toEqual(action);
  });

  it("Should create an action to add to the list an event", () => {
    const action = {
      type: actions.ADD_TO_LIST,
      data: mockEvents[0]
    };

    expect(actionsCreators.addToList(mockEvents[0])).toEqual(action);
  });

  it("Should create a fetch success action after finishing fetching", async () => {
    const expectedActions = [
      { type: actions.IS_FETCH_LOADING },
      { type: actions.LIST_FETCH_SUCCESS, data: mockEvents }
    ];

    const store = mockStore(initialState);

    await store.dispatch(actionsCreators.fetchList());

    expect(store.getActions()).toEqual(expectedActions);
  });

});
