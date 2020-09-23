import React from 'react';
import './realEstateFilter.css';
import { LOCATIONS } from './../../constant';

const RealEstateFilter = () => {
  return (
    <div className="realEstateFilter">
      <select name="location" id="">
        <option value="">All Locations</option>
        {LOCATIONS.map((location) => (
          <option key={location.value} value={location.value}>
            {location.title}
          </option>
        ))}
      </select>
      <button className="button">Search</button>
    </div>
  );
};

export default RealEstateFilter;
