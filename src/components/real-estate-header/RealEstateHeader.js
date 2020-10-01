import React, { useState } from 'react';
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
} from '../../context/listings/ListingsState';

const RealEstateHeader = () => {
  const [listingsState, listingsDispatch] = useListings();
  const { query, isEdit, currentListing } = listingsState;
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

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
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        break;
      case 'price':
        setPrice(e.target.value);
        break;
      default:
        throw new Error('Wrong switch case handle change');
    }
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
