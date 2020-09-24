import React from 'react';
import './realEstateCardPrice.css';

class RealEstateCardPrice extends React.Component {
  priceContent = this.props.price.toLocaleString();
  render() {
    return (
      <h4 className="realEstateCardPrice">{`USD ${this.priceContent}`}</h4>
    );
  }
}

export default RealEstateCardPrice;
