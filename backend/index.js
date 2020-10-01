const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());

const PORT = process.env.PORT || 3000;

// the image sizes are too large, this would be optimized in production
const TOURS = [
  {
    title: 'Amazing Trip',
    price: Math.floor(Math.random() * 1000) + 1,
    location: 'New York',
    id: uuidv4(),
  },
];

app.get('/api/v1', (req, res, next) => {
  if (TOURS.length === 0) {
    res.status(400).send('Not Found');
  }
  res.send(TOURS);
  res.end();
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
