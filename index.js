const express = require('express');

const app = express();

app.get('/', (response) => {
  response.send('ok');
});

app.listen(2999, () => {
  console.log('Server listening on port 2999');
});

app.get('/test', (response) => {
  response.json({ status: 200, message: 'ok' });
});

app.get('/time', (response) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  response.json({ status: 200, message: `${hours}:${minutes}` });
});