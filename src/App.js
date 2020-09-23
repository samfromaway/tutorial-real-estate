import React, { useState, useEffect } from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';
import House01 from './images/house01.jpg';

const listings = [
  {
    title: 'Nice Home1',
    img: House01,
    rooms: '2',
    location: 'New York',
    locationValue: 'ny',
    area: 500,
    price: 500000,
    id: 'X109',
  },
  {
    title: 'Nice Home2',
    img: House01,
    rooms: '3',
    location: 'Los Angeles',
    locationValue: 'la',
    area: 500,
    price: 500000,
    id: 'X108',
  },
  {
    title: 'Nice Home3',
    img: House01,
    rooms: '1',
    location: 'New York',
    locationValue: 'ny',
    area: 500,
    price: 500000,
    id: 'X107',
  },
  {
    title: 'Nice Home4',
    img: House01,
    rooms: '2',
    location: 'Los Angeles',
    locationValue: 'la',
    area: 500,
    price: 500000,
    id: 'X106',
  },
  {
    title: 'Nice Home5',
    img: House01,
    rooms: '5',
    location: 'New York',
    locationValue: 'ny',
    area: 500,
    price: 500000,
    id: 'X105',
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
        (listing) => listing.locationValue === query
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
      <div className="realEstate">
        <RealEstateHeader query={query} handleQueryChange={handleQueryChange} />
        <RealEstateListing listings={filteredListings} />
      </div>
    </div>
  );
}

export default App;
