import React from 'react';
import './realEstateFilter.css';
import { LOCATIONS } from './../../constant';

const RealEstateFilter = ({ query, handleQueryChange }) => {
  return (
    <div className="realEstateFilter">
      <div className="inputGroup">
        <label htmlFor="locationFilter">Filter</label>
        <select
          name="locationFilter"
          value={query}
          onChange={handleQueryChange}
        >
          <option value="">Select Locations</option>
          {LOCATIONS.map((location) => (
            <option key={location.value} value={location.title}>
              {location.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RealEstateFilter;
