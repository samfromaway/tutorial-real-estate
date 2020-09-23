import React from 'react';
import './realEstateCardImg.css';

const RealEstateCardImg = ({ img, title, id }) => {
  return (
    <div className="realEstateCardImg">
      <img src={img} alt={title} className="realEstateCardImg__img" />
      <p className="realEstateCardImg__reference">{id}</p>
    </div>
  );
};

export default RealEstateCardImg;
