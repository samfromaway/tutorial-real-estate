import React from 'react';
import './realEstateCardImg.css';
import House01 from '../../images/house01.jpg';

class RealEstateCardImg extends React.Component {
  render() {
    return (
      <div className="realEstateCardImg">
        <img
          src={House01}
          alt={this.props.title}
          className="realEstateCardImg__img"
        />
        <button
          className="realEstateCardImg__editButton"
          onClick={this.props.handleEditClick}
          value={this.props.id}
        >
          Edit
        </button>
        <button
          className="realEstateCardImg__deleteButton"
          onClick={this.props.handleDeleteClick}
          value={this.props.id}
        >
          Del
        </button>
      </div>
    );
  }
}

export default RealEstateCardImg;
