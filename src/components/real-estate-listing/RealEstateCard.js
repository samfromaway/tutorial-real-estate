import React from 'react';
import RealEstateCardDetails from './RealEstateCardDetails';
import RealEstateCardImg from './RealEstateCardImg';
import RealEstateCardTitle from './RealEstateCardTitle';
import RealEstateCardPrice from './RealEstateCardPrice';
import './realEstateCard.css';

class RealEstateCard extends React.Component {
  render() {
    return (
      <div className="realEstateCard">
        <RealEstateCardImg
          title={this.props.data.title}
          handleEditClick={this.props.handleEditClick}
          handleDeleteClick={this.props.handleDeleteClick}
          id={this.props.data.id}
        />
        <RealEstateCardTitle title={this.props.data.title} />
        <hr />
        <RealEstateCardDetails location={this.props.data.location} />
        <hr />
        <RealEstateCardPrice price={this.props.data.price} />
      </div>
    );
  }
}

export default RealEstateCard;
