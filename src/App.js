import React, { useState, useEffect } from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';

const listings = [
  {
    title: 'Nice Home1',
    location: 'New York',
    price: 500000,
    id: '109',
  },
  {
    title: 'Nice Home2',
    location: 'Los Angeles',
    price: 500000,
    id: '108',
  },
  {
    title: 'Nice Home3',
    location: 'New York',
    price: 500000,
    id: '107',
  },
  {
    title: 'Nice Home4',
    location: 'Los Angeles',
    price: 500000,
    id: '106',
  },
  {
    title: 'Nice Home5',
    location: 'New York',
    price: 500000,
    id: '105',
  },
];

function App() {
  const [query, setQuery] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filter = (query) => {
    if (query) {
      const filteredListings = listings.filter(
        (listing) => listing.location === query
      );
      setFilteredListings(filteredListings);
    } else setFilteredListings(listings);
  };

  useEffect(() => {
    filter(query);
  }, [query]);

  //
  //
  //

  return (
    <div className="app">
      <RealEstateHeader query={query} handleQueryChange={handleQueryChange} />
      <RealEstateListing listings={filteredListings} />
    </div>
  );
}

export default App;
