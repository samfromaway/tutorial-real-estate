import React from 'react';
import LocationIcon from '../../images/icons/location.svg';
import './realEstateCardDetails.css';

const RealEstateCardDetails = ({ location }) => {
  return (
    <div className="realEstateCardDetails">
      <div className="realEstateCardDetails__detail">
        <img
          className="realEstateCardDetails__detail__icon"
          src={LocationIcon}
          alt="Location Icon"
        />
        <p className="realEstateCardDetails__detail__text">{location}</p>
      </div>
    </div>
  );
};

export default RealEstateCardDetails;
