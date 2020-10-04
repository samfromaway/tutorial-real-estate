export default (state, action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return {
        ...state,
        listings: [action.payload, ...state.listings],
        loading: false,
      };
    case 'DELETE_LISTING':
      return {
        ...state,
        listings: state.listings.filter(
          (element) => element.id !== action.payload
        ),
        loading: false,
      };
    case 'EDIT_LISTING':
      return {
        ...state,
        listings: state.listings.map((element) =>
          element.id === action.payload.id
            ? action.payload.updatedItem
            : element
        ),
        loading: false,
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

    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.input]: action.payload.text,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_INPUT':
      return {
        ...state,
        title: '',
        price: '',
        location: '',
        isEdit: false,
        currentListings: {},
      };
    default:
      throw new Error('Unsupported action type of listings');
  }
};
