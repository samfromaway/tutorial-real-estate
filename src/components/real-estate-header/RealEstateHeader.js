import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';
import RealEstateInputs from './RealEstateInputs';
import {
  useListings,
  addListing,
  editListing,
  clearInput,
  queryChange,
  setIsFiltered,
  changeInput,
} from '../../context/listings/ListingsState';

const RealEstateHeader = () => {
  const [listingsState, listingsDispatch] = useListings();
  const {
    query,
    title,
    price,
    location,
    isEdit,
    currentListing,
  } = listingsState;

  const handleAddOrEditClick = () => {
    if (isEdit) {
      const newListing = {
        title,
        location,
        price: +price,
        id: currentListing.id,
      };
      editListing(listingsDispatch, newListing);
    } else {
      const newListing = {
        title,
        location,
        price: +price,
        id: Math.floor(Math.random() * 101).toLocaleString(),
      };
      addListing(listingsDispatch, newListing);
    }
    clearInput(listingsDispatch);
  };

  const handleClearClick = () => {
    clearInput(listingsDispatch);
  };

  const handleQueryChange = (e) => {
    if (e.target.value) {
      setIsFiltered(listingsDispatch, true);
    } else setIsFiltered(listingsDispatch, false);

    queryChange(listingsDispatch, e.target.value);
  };

  const handleInputChange = (e) => {
    changeInput(listingsDispatch, e.target.value, e.target.name);
  };

  return (
    <div className="realEstateHeader">
      <h1>Real Estate App</h1>
      <RealEstateInputs
        title={title}
        price={price}
        location={location}
        isEdit={isEdit}
        handleInputChange={handleInputChange}
        handleClearClick={handleClearClick}
        handleAddOrEditClick={handleAddOrEditClick}
      />
      <RealEstateFilter query={query} handleQueryChange={handleQueryChange} />
    </div>
  );
};

export default RealEstateHeader;
