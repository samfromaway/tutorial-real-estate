const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_URL = '/api/v1';
let listings = [
  {
    title: 'Amazing Trip',
    price: 11,
    location: 'New York',
    id: '33',
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
