import React, { useReducer, useContext } from 'react';
import ListingsContext from './listingsContext';
import ListingsReducer from './listingsReducer';

const API_URL = 'http://localhost:3000/api/v1';

export const useListings = () => {
  const { state, dispatch } = useContext(ListingsContext);
  return [state, dispatch];
};

export async function getListings(dispatch) {
  const res = await fetch(API_URL);
  const data = await res.json();

  dispatch({
    type: 'GET_LISTINGS',
    payload: data,
  });
}

export async function addListing(dispatch, newListing) {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      ...newListing,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();

  dispatch({
    type: 'ADD_LISTING',
    payload: data,
  });
}

export async function deleteListing(dispatch, id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  dispatch({
    type: 'DELETE_LISTING',
    payload: data.id,
  });
}

export async function editListing(dispatch, updatedListing) {
  const updatedListingId = updatedListing.id;

  const res = await fetch(`${API_URL}/${updatedListingId}`, {
    method: 'PUT',
    body: JSON.stringify({
      ...updatedListing,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();

  dispatch({
    type: 'EDIT_LISTING',
    payload: {
      id: data.id,
      updatedItem: data,
    },
  });
}

export const clearInput = (dispatch) => dispatch({ type: 'CLEAR_INPUT' });

export const setIsFiltered = (dispatch, value) =>
  dispatch({ type: 'SET_IS_FILTERED', payload: value });

export const editClick = (dispatch, listing) => {
  dispatch({
    type: 'EDIT_CLICK',
    payload: listing,
  });
};

export const queryChange = (dispatch, query) => {
  dispatch({
    type: 'QUERY_CHANGE',
    payload: query,
  });
};

export const filterListings = (dispatch, query) => {
  dispatch({
    type: 'FILTER_LISTINGS',
    payload: query,
  });
};

export const changeInput = (dispatch, text, input) => {
  dispatch({
    type: 'CHANGE_INPUT',
    payload: { text, input },
  });
};

const ListingsState = ({ children }) => {
  const initialState = {
    listings: [],
    query: '',
    title: '',
    price: '',
    location: '',
    isEdit: false,
    isFiltered: false,
    filteredListings: [],
    currentListing: {},
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ListingsReducer, initialState);

  return (
    <ListingsContext.Provider value={{ state, dispatch }}>
      {children}
    </ListingsContext.Provider>
  );
};

export default ListingsState;
