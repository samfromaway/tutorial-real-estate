import React from 'react';
import './realEstateFilter.css';
import { LOCATIONS } from './../../constant';

class RealEstateFilter extends React.Component {
  render() {
    return (
      <div className="realEstateFilter">
        <div className="inputGroup">
          <label htmlFor="locationFilter">Filter Location</label>
          <select
            name="locationFilter"
            value={this.props.query}
            onChange={this.props.handleQueryChange}
          >
            <option value="">All Locations</option>
            {LOCATIONS.map((location) => (
              <option key={location.value} value={location.title}>
                {location.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default RealEstateFilter;
