const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  // Logic to create a user
  res.send('User created');
});

app.listen(3000, () => {
  console.log('User service is running on port 3001');
});