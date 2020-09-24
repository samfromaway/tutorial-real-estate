import React from 'react';
import { LOCATIONS } from './../../constant';

class RealEstateInputs extends React.Component {
  buttonContent = this.props.isEdit ? 'Change' : 'Add';

  render() {
    return (
      <div>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={(e) => this.props.setTitle(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={this.props.price}
            onChange={(e) => this.props.setPrice(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <select
            name="location"
            value={this.props.location}
            onChange={(e) => this.props.setLocation(e.target.value)}
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
          {this.buttonContent}
        </button>
        <button className="button" onClick={this.props.clearInput}>
          Clear
        </button>
      </div>
    );
  }
}

export default RealEstateInputs;
