import React from 'react';
import './realEstateCardImg.css';
import House01 from '../../images/house01.jpg';

const RealEstateCardImg = ({ title }) => {
  return (
    <div className="realEstateCardImg">
      <img src={House01} alt={title} className="realEstateCardImg__img" />
      <button className="realEstateCardImg__editButton">Edit</button>
      <button className="realEstateCardImg__deleteButton">Del</button>
    </div>
  );
};

export default RealEstateCardImg;
