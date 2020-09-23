import React from 'react';
import RealEstateCard from './RealEstateCard';

import './realEstateListing.css';

const RealEstateListing = ({ listings }) => {
  return (
    <div className="realEstateListing">
      {listings.map((listing) => (
        <RealEstateCard key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default RealEstateListing;
