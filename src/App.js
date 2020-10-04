import React from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <RealEstateHeader />
        <RealEstateListing />
      </div>
    </Provider>
  );
}

export default App;
