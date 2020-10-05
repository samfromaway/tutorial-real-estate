import React from 'react';
import './realEstateCardTitle.css';

class RealEstateCardTitle extends React.Component {
  render() {
    return <h2 className="realEstateCardTitle">{this.props.title}</h2>;
  }
}

export default RealEstateCardTitle;
