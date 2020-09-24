import React from 'react';
import { LOCATIONS } from './../../constant';
import './realEstateInputs.css';

const RealEstateInputs = ({
  isEdit,
  title,
  setTitle,
  price,
  setPrice,
  location,
  setLocation,
}) => {
  const buttonContent = isEdit ? 'Edit' : 'Add';
  return (
    <div>
      <div className="inputGroup">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="title">Location</label>
        <select
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Choose Location</option>
          {LOCATIONS.map((location) => (
            <option key={location.value} value={location.title}>
              {location.title}
            </option>
          ))}
        </select>
      </div>
      <button className="button">{buttonContent}</button>
    </div>
  );
};

export default RealEstateInputs;
