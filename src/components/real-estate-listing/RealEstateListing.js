import React from 'react';
import RealEstateCard from './RealEstateCard';
import './realEstateListing.css';

const RealEstateListing = () => {
  return (
    <div className="realEstateListing">
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
    </div>
  );
};

export default RealEstateListing;
