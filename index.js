const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ok');
  });

app.listen(3002, () => {
  console.log('Server listening on port 3002');
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

app.get('/hello/:id', (req, res) => {
    const { id } = req.params;
    res.json({ status: 200, message: `Hello, ${id}` });
  });
  
  app.get('/search', (req, res) => {
    const { string } = req.query;
    if (string) {
      res.json({ status: 200, message: 'ok', data: s });
    } else {
      res.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
    }
  });

  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get('/movies/create/:id', (req, res) => {
    const movieId = req.params.id;
      res.send(`Movie ${movieId} created!`);
    });
  

    app.get('/movies/read/', (req, res) => {
      res.json({ status: 200, data: movies});
    });
    

    app.get('/movies/update/:id', (req, res) => {
      const movieId = req.params.id;
      res.send(`Movie ${movieId} updated!`);
    });
    

    app.get('/movies/delete/:id', (req, res) => {
      const movieId = req.params.id;
      res.send(`Movie ${movieId} deleted!`);
    });