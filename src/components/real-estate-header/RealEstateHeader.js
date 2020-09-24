import React from 'react';
import RealEstateFilter from './RealEstateFilter';
import './realEstateHeader.css';
import RealEstateInputs from './RealEstateInputs';

class RealEstateHeader extends React.Component {
  render() {
    return (
      <div className="realEstateHeader">
        <h1>Real Estate App</h1>
        <RealEstateInputs
          title={this.props.title}
          setTitle={this.props.setTitle}
          price={this.props.price}
          setPrice={this.props.setPrice}
          location={this.props.location}
          setLocation={this.props.setLocation}
          isEdit={this.props.isEdit}
          clearInput={this.props.clearInput}
          handleAddOrEditClick={this.props.handleAddOrEditClick}
        />
        <RealEstateFilter
          query={this.props.query}
          handleQueryChange={this.props.handleQueryChange}
        />
      </div>
    );
  }
}

export default RealEstateHeader;
