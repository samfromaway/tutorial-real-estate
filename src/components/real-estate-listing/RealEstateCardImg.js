import React from 'react';
import './realEstateCardImg.css';
import House01 from '../../images/house01.jpg';

const RealEstateCardImg = ({ img, title, id }) => {
  return (
    <div className="realEstateCardImg">
      <img src={House01} alt={title} className="realEstateCardImg__img" />
      <p className="realEstateCardImg__reference">{id}</p>
    </div>
  );
};

export default RealEstateCardImg;
