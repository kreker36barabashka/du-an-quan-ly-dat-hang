const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/notifications', (req, res) => {
  // Logic to send a notification
  res.send('Notification sent');
});

app.listen(3000, () => {
  console.log('Notification service is running on port 3002');
});