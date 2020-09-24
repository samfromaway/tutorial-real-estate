import React from 'react';
import './realEstateCardPrice.css';

const RealEstateCardPrice = ({ price }) => {
  const priceContent = price.toLocaleString();
  return <h4 className="realEstateCardPrice">{`USD ${priceContent}`}</h4>;
};

export default RealEstateCardPrice;
