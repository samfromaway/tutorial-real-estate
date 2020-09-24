import React from 'react';
import { LOCATIONS } from './../../constant';

const RealEstateInputs = ({
  isEdit,
  title,
  setTitle,
  price,
  setPrice,
  location,
  setLocation,
  clearInput,
  handleAddOrEditClick,
}) => {
  const buttonContent = isEdit ? 'Change' : 'Add';
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
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="location">Location</label>
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
      <button className="button" onClick={handleAddOrEditClick}>
        {buttonContent}
      </button>
      <button className="button" onClick={clearInput}>
        Clear
      </button>
    </div>
  );
};

export default RealEstateInputs;
