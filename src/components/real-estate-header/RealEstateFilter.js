import React from 'react';
import './realEstateFilter.css';
import { LOCATIONS } from './../../constant';

const RealEstateFilter = ({ query, handleQueryChange }) => {
  return (
    <div className="realEstateFilter">
      <select name="location" value={query} onChange={handleQueryChange}>
        <option value="">All Locations</option>
        {LOCATIONS.map((location) => (
          <option key={location.value} value={location.title}>
            {location.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RealEstateFilter;
