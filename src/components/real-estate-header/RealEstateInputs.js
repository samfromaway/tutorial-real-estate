import React from 'react';
import { LOCATIONS } from './../../constant';

class RealEstateInputs extends React.Component {
  render() {
    const buttonContent = this.props.isEdit ? 'Change' : 'Add';

    return (
      <div>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.props.setTitle}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={this.props.price}
            onChange={this.props.setPrice}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <select
            name="location"
            value={this.props.location}
            onChange={this.props.setLocation}
          >
            <option value="">Choose Location</option>
            {LOCATIONS.map((location) => (
              <option key={location.value} value={location.title}>
                {location.title}
              </option>
            ))}
          </select>
        </div>
        <button className="button" onClick={this.props.handleAddOrEditClick}>
          {buttonContent}
        </button>
        <button className="button" onClick={this.props.clearInput}>
          Clear
        </button>
      </div>
    );
  }
}

export default RealEstateInputs;
