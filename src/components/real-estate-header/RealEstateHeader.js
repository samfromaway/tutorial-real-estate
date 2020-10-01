import React, { useState, useContext } from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';
import RealEstateInputs from './RealEstateInputs';

import ListingsContext from './../../context/listings/listingsContext';

const RealEstateHeader = () => {
  const listingsContext = useContext(ListingsContext);
  const {
    query,
    isEdit,
    currentListing,
    addListing,
    setIsFiltered,
    editListing,
    clearInput,
    queryChange,
  } = listingsContext;

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
      editListing(newListing);
    } else {
      const newListing = {
        title,
        location,
        price: +price,
        id: Math.floor(Math.random() * 101).toLocaleString(),
      };
      addListing(newListing);
    }
    clearInput();
  };

  const handleClearClick = () => {
    clearInput();
  };

  const handleQueryChange = (e) => {
    if (e.target.value) {
      setIsFiltered(true);
    } else setIsFiltered(false);

    queryChange(e.target.value);
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
