import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';

const RealEstateHeader = () => {
  return (
    <div className="realEstateHeader">
      <h1>Real Estate App</h1>
      <RealEstateFilter />
    </div>
  );
};

export default RealEstateHeader;
