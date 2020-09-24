import React from 'react';
import RealEstateCard from './RealEstateCard';

import './realEstateListing.css';

const RealEstateListing = ({
  listings,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <div className="realEstateListing">
      {listings.map((listing) => (
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
