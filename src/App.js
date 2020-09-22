import React from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';

function App() {
  return (
    <div className="app">
      <div className="realEstate">
        <RealEstateHeader />
        <RealEstateListing />
      </div>
    </div>
  );
}

export default App;
