import React from 'react';
import House01 from '../../images/house01.jpg';
import './realEstateCardImg.css';

const RealEstateCardImg = () => {
  return (
    <div className="realEstateCardImg">
      <img src={House01} alt="" className="realEstateCardImg__img" />
      <p className="realEstateCardImg__reference">ref</p>
    </div>
  );
};

export default RealEstateCardImg;
