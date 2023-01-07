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

app.get('/hello/:id', (request, response) => {
    const { id } = request.params;
    response.json({ status: 200, message: `Hello, ${id}` });
  });
  
  app.get('/search', (request, response) => {
    const { string } = request.query;
    if (string) {
      response.json({ status: 200, message: 'ok', data: string });
    } else {
      response.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
    }
  });