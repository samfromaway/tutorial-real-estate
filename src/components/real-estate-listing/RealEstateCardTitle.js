import React from 'react';
import './realEstateCardTitle.css';

class RealEstateCardTitle extends React.Component {
  title = this.props.title;

  render() {
    return <h2 className="realEstateCardTitle">{this.title}</h2>;
  }
}

export default RealEstateCardTitle;
