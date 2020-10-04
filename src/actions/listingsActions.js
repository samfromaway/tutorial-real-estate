import {
  ADD_LISTING,
  DELETE_LISTING,
  EDIT_LISTING,
  EDIT_CLICK,
  QUERY_CHANGE,
  SET_IS_FILTERED,
  FILTER_LISTINGS,
  CHANGE_INPUT,
  SET_LOADING,
  CLEAR_INPUT,
} from './types';

export async function addListing(dispatch, newListing) {
  setLoading(dispatch);

  dispatch({
    type: ADD_LISTING,
    payload: newListing,
  });
}

export async function deleteListing(dispatch, id) {
  setLoading(dispatch);

  dispatch({
    type: DELETE_LISTING,
    payload: id,
  });
}

export async function editListing(dispatch, updatedListing) {
  setLoading(dispatch);

  dispatch({
    type: EDIT_LISTING,
    payload: {
      id: updatedListing.id,
      updatedItem: updatedListing,
    },
  });
}

export const setLoading = (dispatch) => dispatch({ type: SET_LOADING });

export const clearInput = (dispatch) => dispatch({ type: CLEAR_INPUT });

export const setIsFiltered = (dispatch, value) =>
  dispatch({ type: SET_IS_FILTERED, payload: value });

export const editClick = (dispatch, listing) => {
  dispatch({
    type: EDIT_CLICK,
    payload: listing,
  });
};

export const queryChange = (dispatch, query) => {
  dispatch({
    type: QUERY_CHANGE,
    payload: query,
  });
};

export const filterListings = (dispatch, query) => {
  dispatch({
    type: FILTER_LISTINGS,
    payload: query,
  });
};

export const changeInput = (dispatch, text, input) => {
  dispatch({
    type: CHANGE_INPUT,
    payload: { text, input },
  });
};
