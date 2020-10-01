import React, { useEffect, useContext } from 'react';
import RealEstateCard from './RealEstateCard';
import './realEstateListing.css';
import ListingsContext from './../../context/listings/listingsContext';

const RealEstateListing = () => {
  const listingsContext = useContext(ListingsContext);
  const {
    listings,
    query,
    filteredListings,
    isFiltered,
    loading,
    getListings,
    deleteListing,
    editClick,
    filterListings,
  } = listingsContext;

  const currentListings = isFiltered ? filteredListings : listings;

  const handleDeleteClick = (e) => {
    deleteListing(e.target.value);
  };

  const handleEditClick = (e) => {
    const item = listings.filter((listing) => listing.id === e.target.value);
    const newItem = item[0];
    editClick(newItem);
  };

  useEffect(() => {
    getListings();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filterListings(query);
    // eslint-disable-next-line
  }, [query, listings]);

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
