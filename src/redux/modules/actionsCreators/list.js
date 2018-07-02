import { getEvents } from "../../../api/list";
import to from "await-to-js";
import { LIST_FETCH_SUCCESS, IS_FETCH_LOADING, FETCH_FAILED, ADD_TO_LIST } from "../actions/list";

export const fetchFailed = (msg) => {
  return {
    type: FETCH_FAILED,
    data: msg
  };
}

export const fetchLoading = () => {
  return {
    type: IS_FETCH_LOADING
  };
}

export const fetchSuccess = (data) => {
  return {
    type: LIST_FETCH_SUCCESS,
    data
  };
}

export const fetchList = () => {
  return async function(dispatch) {
    dispatch(fetchLoading());

    const [err, data] = await to(getEvents());

    if (err) {
      dispatch(fetchFailed("Something was wrong with the server."));
    }
    else {
      dispatch(fetchSuccess(data));
    }
  }
}

export const addToList = (event) => {
  return {
    type: ADD_TO_LIST,
    data: event
  };
}
