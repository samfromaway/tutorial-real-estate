import React from 'react';
import RealEstateCardDetails from './RealEstateCardDetails';
import RealEstateCardImg from './RealEstateCardImg';
import RealEstateCardTitle from './RealEstateCardTitle';
import RealEstateCardPrice from './RealEstateCardPrice';
import './realEstateCard.css';

const RealEstateCard = ({ data }) => {
  return (
    <div className="realEstateCard">
      <RealEstateCardImg img={data.img} title={data.title} id={data.id} />
      <RealEstateCardTitle title={data.title} />
      <hr />
      <RealEstateCardDetails
        location={data.location}
        rooms={data.rooms}
        area={data.area}
      />
      <hr />
      <RealEstateCardPrice price={data.price} />
    </div>
  );
};

export default RealEstateCard;
