import React from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';
import ListingsState from './context/listings/ListingsState';
function App() {
  return (
    <div className="app">
      <ListingsState>
        <RealEstateHeader />

        <RealEstateListing />
      </ListingsState>
    </div>
  );
}

export default App;
