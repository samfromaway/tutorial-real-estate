import React from 'react';
import RealEstateCardDetails from './RealEstateCardDetails';
import RealEstateCardImg from './RealEstateCardImg';
import RealEstateCardTitle from './RealEstateCardTitle';
import RealEstateCardPrice from './RealEstateCardPrice';
import './realEstateCard.css';

const RealEstateCard = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="realEstateCard">
      <RealEstateCardImg
        title={data.title}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        id={data.id}
      />
      <RealEstateCardTitle title={data.title} />
      <hr />
      <RealEstateCardDetails
        location={data.title}
        rooms={data.title}
        area={data.title}
      />
      <hr />
      <RealEstateCardPrice price={data.id} />
    </div>
  );
};

export default RealEstateCard;
