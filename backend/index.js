const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_URL = '/api/v1';
let listings = [
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

app.get(API_URL, (req, res, next) => {
  res.json(listings);
});

app.post(`${API_URL}`, (req, res) => {
  const newListing = req.body;
  listings = [newListing, ...listings];
  res.json(newListing);
});

app.put(`${API_URL}/:id`, (req, res) => {
  const currentListing = req.body;
  res.json(currentListing);
  listings = listings.map((element) =>
    element.id === currentListing.id ? currentListing : element
  );
});

app.delete(`${API_URL}/:id`, (req, res) => {
  const deletedListing = listings.filter(
    (element) => element.id === req.params.id
  );
  res.json(deletedListing[0]);
  listings = listings.filter((element) => element.id !== req.params.id);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
