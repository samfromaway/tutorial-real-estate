import React, { useEffect } from 'react';
import RealEstateCard from './RealEstateCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  getListings,
  editClick,
  deleteListing,
} from '../../actions/listingsActions';
import './realEstateListing.css';

const RealEstateListing = () => {
  const listingsState = useSelector((state) => state.listings);
  const listingsDispatch = useDispatch();

  const {
    listings,
    query,
    filteredListings,
    isFiltered,
    loading,
  } = listingsState;

  const currentListings = isFiltered ? filteredListings : listings;

  const handleDeleteClick = (e) => {
    deleteListing(listingsDispatch, e.target.value);
  };

  const handleEditClick = (e) => {
    const item = listings.filter((listing) => listing.id === e.target.value);
    const newItem = item[0];
    editClick(listingsDispatch, newItem);
  };
  useEffect(() => {
    getListings(listingsDispatch);
  }, [listingsDispatch, query]);

  if (loading) {
    return <h2 style={{ paddingTop: 10, textAlign: 'center' }}>Loading...</h2>;
  } else if (currentListings.length === 0) {
    return <h2 style={{ paddingTop: 10, textAlign: 'center' }}>No Results</h2>;
  }
  return (
    <div className="realEstateListing">
      {currentListings.map((listing) => (
        <RealEstateCard
          key={listing.id}
          data={listing}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default RealEstateListing;
