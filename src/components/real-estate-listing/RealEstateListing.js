import React from 'react';
import RealEstateCard from './RealEstateCard';

import './realEstateListing.css';

class RealEstateListing extends React.Component {
  render() {
    return (
      <div className="realEstateListing">
        {this.props.listings.map((listing) => (
          <RealEstateCard
            key={listing.id}
            data={listing}
            handleEditClick={this.props.handleEditClick}
            handleDeleteClick={this.props.handleDeleteClick}
          />
        ))}
      </div>
    );
  }
}

export default RealEstateListing;
