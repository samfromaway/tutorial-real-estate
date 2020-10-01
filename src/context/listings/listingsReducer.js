export default (state, action) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return {
        ...state,
        listings: action.payload,
      };
    case 'ADD_LISTING':
      return {
        ...state,
        listings: [action.payload, ...state.listings],
      };
    case 'DELETE_LISTING':
      return {
        ...state,
        listings: state.listings.filter(
          (element) => element.id !== action.payload
        ),
      };
    case 'EDIT_LISTING':
      return {
        ...state,
        listings: state.listings.map((element) =>
          element.id === action.payload.id
            ? action.payload.updatedItem
            : element
        ),
      };
    case 'EDIT_CLICK':
      return {
        ...state,
        title: action.payload.title,
        price: action.payload.price,
        location: action.payload.location,
        isEdit: true,
        currentListing: action.payload,
      };
    case 'QUERY_CHANGE':
      return {
        ...state,
        query: action.payload,
      };
    case 'SET_IS_FILTERED':
      return {
        ...state,
        isFiltered: action.payload,
      };
    case 'FILTER_LISTINGS':
      if (action.payload) {
        return {
          ...state,
          filteredListings: state.listings.filter(
            (listing) => listing.location === action.payload
          ),
        };
      } else {
        return {
          ...state,
          filteredListings: [],
        };
      }

    case 'CLEAR_INPUT':
      return {
        ...state,
        title: '',
        price: '',
        location: '',
        isEdit: false,
        currentListings: {},
      };
    case 'LISTINGS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error('Unsupported action type of listings');
  }
};
