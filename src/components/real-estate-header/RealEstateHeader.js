import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';

const RealEstateHeader = ({ query, handleQueryChange }) => {
  return (
    <div className="realEstateHeader">
      <h1>Real Estate App</h1>
      <RealEstateFilter query={query} handleQueryChange={handleQueryChange} />
    </div>
  );
};

export default RealEstateHeader;
