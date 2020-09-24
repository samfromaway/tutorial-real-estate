import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';
import RealEstateInputs from './RealEstateInputs';

const RealEstateHeader = ({
  query,
  handleQueryChange,
  title,
  setTitle,
  price,
  setPrice,
  location,
  setLocation,
  isEdit,
  clearInput,
  handleAddOrEditClick,
}) => {
  return (
    <div className="realEstateHeader">
      <h1>Real Estate App</h1>
      <RealEstateInputs
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        location={location}
        setLocation={setLocation}
        isEdit={isEdit}
        clearInput={clearInput}
        handleAddOrEditClick={handleAddOrEditClick}
      />
      <RealEstateFilter query={query} handleQueryChange={handleQueryChange} />
    </div>
  );
};

export default RealEstateHeader;
