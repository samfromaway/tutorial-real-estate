import React from 'react';
import './realEstateCardPrice.css';

class RealEstateCardPrice extends React.Component {
  render() {
    const priceContent = this.props.price.toLocaleString();

    return <h4 className="realEstateCardPrice">{`USD ${priceContent}`}</h4>;
  }
}

export default RealEstateCardPrice;
