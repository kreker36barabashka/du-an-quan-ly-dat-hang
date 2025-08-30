const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://mongodb:27017/orderDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/orders', (req, res) => {
  // Logic to create an order
  res.send('Order created');
});

app.listen(3000, () => {
  console.log('Order service is running on port 3000');
});