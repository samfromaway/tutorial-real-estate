import React from 'react';
import RealEstateCardDetails from './RealEstateCardDetails';
import RealEstateCardImg from './RealEstateCardImg';
import RealEstateCardTitle from './RealEstateCardTitle';
import RealEstateCardPrice from './RealEstateCardPrice';
import './realEstateCard.css';

const RealEstateCard = () => {
  return (
    <div className="realEstateCard">
      <RealEstateCardImg />
      <RealEstateCardTitle />
      <hr />
      <RealEstateCardDetails />
      <hr />
      <RealEstateCardPrice />
    </div>
  );
};

export default RealEstateCard;
