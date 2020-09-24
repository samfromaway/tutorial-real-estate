import React from 'react';
import LocationIcon from '../../images/icons/location.svg';
import './realEstateCardDetails.css';

class RealEstateCardDetails extends React.Component {
  render() {
    return (
      <div className="realEstateCardDetails">
        <div className="realEstateCardDetails__detail">
          <img
            className="realEstateCardDetails__detail__icon"
            src={LocationIcon}
            alt="Location Icon"
          />
          <p className="realEstateCardDetails__detail__text">
            {this.props.location}
          </p>
        </div>
      </div>
    );
  }
}

export default RealEstateCardDetails;
