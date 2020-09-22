import React from 'react';
import AreaIcon from '../../images/icons/area.svg';
import BedroomIcon from '../../images/icons/bedroom.svg';
import LocationIcon from '../../images/icons/location.svg';
import './realEstateCardDetails.css';

const RealEstateCardDetails = () => {
  return (
    <div className="realEstateCardDetails">
      <div className="realEstateCardDetails__detail">
        <img
          className="realEstateCardDetails__detail__icon"
          src={LocationIcon}
          alt="Location Icon"
        />
        <p className="realEstateCardDetails__detail__text">Area</p>
      </div>
      <div className="realEstateCardDetails__detail">
        <img
          className="realEstateCardDetails__detail__icon"
          src={BedroomIcon}
          alt="Bedroom Icon"
        />
        <p className="realEstateCardDetails__detail__text">Area</p>
      </div>
      <div className="realEstateCardDetails__detail">
        <img
          className="realEstateCardDetails__detail__icon"
          src={AreaIcon}
          alt="Area Icon"
        />
        <p className="realEstateCardDetails__detail__text">Area</p>
      </div>
    </div>
  );
};

export default RealEstateCardDetails;
