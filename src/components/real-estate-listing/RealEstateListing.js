import React from 'react';
import RealEstateCard from './RealEstateCard';
import House01 from '../../images/house01.jpg';

import './realEstateListing.css';

const RealEstateListing = () => {
  const listings = [
    {
      title: 'Nice Home1',
      img: House01,
      rooms: '2',
      location: 'New York',
      area: 500,
      price: 500000,
      id: 'X109',
    },
    {
      title: 'Nice Home2',
      img: House01,
      rooms: '3',
      location: 'Los Angeles',
      area: 500,
      price: 500000,
      id: 'X108',
    },
    {
      title: 'Nice Home3',
      img: House01,
      rooms: '1',
      location: 'New York',
      area: 500,
      price: 500000,
      id: 'X107',
    },
    {
      title: 'Nice Home4',
      img: House01,
      rooms: '2',
      location: 'Los Angeles',
      area: 500,
      price: 500000,
      id: 'X106',
    },
    {
      title: 'Nice Home5',
      img: House01,
      rooms: '5',
      location: 'New York',
      area: 500,
      price: 500000,
      id: 'X105',
    },
  ];
  return (
    <div className="realEstateListing">
      {listings.map((listing) => (
        <RealEstateCard key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default RealEstateListing;
