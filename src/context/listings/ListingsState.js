import React, { useReducer } from 'react';
import ListingsContext from './listingsContext';
import ListingsReducer from './listingsReducer';

const ListingsState = ({ children }) => {
  const initialState = {
    listings: [],
    query: '',
    isEdit: false,
    isFiltered: false,
    filteredListings: [],
    currentListing: {},
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ListingsReducer, initialState);
  const API_URL = 'http://localhost:3000/api/v1';

  async function getListings() {
    const res = await fetch(API_URL);
    const data = await res.json();

    dispatch({
      type: 'GET_LISTINGS',
      payload: data,
    });
  }

  async function addListing(newListing) {
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

  async function deleteListing(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    dispatch({
      type: 'DELETE_LISTING',
      payload: data.id,
    });
  }

  async function editListing(updatedListing) {
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

  const clearInput = () => dispatch({ type: 'CLEAR_INPUT' });

  const setIsFiltered = (value) =>
    dispatch({ type: 'SET_IS_FILTERED', payload: value });

  const editClick = (listing) => {
    dispatch({
      type: 'EDIT_CLICK',
      payload: listing,
    });
  };

  const queryChange = (query) => {
    dispatch({
      type: 'QUERY_CHANGE',
      payload: query,
    });
  };

  const filterListings = (query) => {
    dispatch({
      type: 'FILTER_LISTINGS',
      payload: query,
    });
  };

  return (
    <ListingsContext.Provider
      value={{
        listings: state.listings,
        query: state.query,
        isEdit: state.isEdit,
        isFiltered: state.isFiltered,
        filteredListings: state.filteredListings,
        currentListing: state.currentListing,
        getListings,
        deleteListing,
        addListing,
        setIsFiltered,
        editListing,
        clearInput,
        editClick,
        queryChange,
        filterListings,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

export default ListingsState;
