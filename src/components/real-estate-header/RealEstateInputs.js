import React from 'react';
import { LOCATIONS } from './../../constant';
import './realEstateInputs.css';

const RealEstateInputs = () => {
  return (
    <div>
      <div className="inputGroup">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
      </div>
      <div className="inputGroup">
        <label htmlFor="price">Price</label>
        <input type="text" name="price" />
      </div>
      <div className="inputGroup">
        <label htmlFor="title">Location</label>
        <select name="location" value={'query'} onChange={'handleQueryChange'}>
          <option value="">Choose Location</option>
          {LOCATIONS.map((location) => (
            <option key={location.value} value={location.title}>
              {location.title}
            </option>
          ))}
        </select>
      </div>
      <button className="button">Add</button>
    </div>
  );
};

export default RealEstateInputs;
