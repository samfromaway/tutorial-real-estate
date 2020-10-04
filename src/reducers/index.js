import { combineReducers } from 'redux';
import listingsReducer from './listingsReducer';

export default combineReducers({
  listings: listingsReducer,
});
