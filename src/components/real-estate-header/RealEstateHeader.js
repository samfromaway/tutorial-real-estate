import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';
import RealEstateInputs from './RealEstateInputs';

const RealEstateHeader = ({ query, handleQueryChange }) => {
  return (
    <div className="realEstateHeader">
      <h1>Real Estate App</h1>
      <RealEstateInputs />
      <RealEstateFilter query={query} handleQueryChange={handleQueryChange} />
    </div>
  );
};

export default RealEstateHeader;
