import React from 'react';
import { LOCATIONS } from './../../constant';

const RealEstateInputs = ({
  isEdit,
  title,
  price,
  location,
  handleInputChange,
  handleClearClick,
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
          onChange={handleInputChange}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="location">Location</label>
        <select name="location" value={location} onChange={handleInputChange}>
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
      <button className="button" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
};

export default RealEstateInputs;
