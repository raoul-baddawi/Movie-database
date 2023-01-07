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
    
    app.get('/movies/read/by-date', (req, res) => {
        const moviesSortedByDate = movies.sort((a, b) => b.year - a.year);
        res.status(200).json({ status: 200, data: moviesSortedByDate });
      });
      
      app.get('/movies/read/by-rating', (req, res) => {
        const moviesSortedByRating = movies.sort((a, b) => b.rating - a.rating);
        res.status(200).json({ status: 200, data: moviesSortedByRating });
      });
      
      app.get('/movies/read/by-title', (req, res) => {
        const moviesSortedByTitle = movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        res.status(200).json({ status: 200, data: moviesSortedByTitle });
      });

      app.get('/movies/read/id/:id', (req, res) => {
        const id = req.params.id;
        const movie = movies.find((mov) => mov.title === id);
        if (movie) {
          res.json({ status: 200, data: movie });
        } else {
          res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` });
        }
      });

      app.get('/movies/add', (req, res) => {
        let { title, year, rating } = req.query;
        if (!title || !year) {
          return res.status(403).send({
            error: true,
            message: 'You cannot create a movie without providing a title and a year.'
          });
        }
        if (year.length !== 4 || isNaN(year)) {
          return res.status(403).send({
            error: true,
            message: 'you cannot create a movie without providing a title and a year.'
          });
        }
        if (!rating) {
          rating = 4;
        }
        const newMovie = { title, year, rating };
        movies.push(newMovie);
        res.send(movies);
      }); 

      app.get('/movies/delete/:id', (req, res) => {
        // Extract the movie id from the request parameters
        const id = req.params.id;
      
        // Find the index of the movie with the specified id
        const index = movies.findIndex(movie => movie.title.toLowerCase()== id.toLowerCase());
      
        // If the movie was not found, send an error message
        if (index === -1) {
          return res.status(404).send({
            error: true,
            message: `The movie ${id} does not exist.`
          }); 
        }
      
        // Remove the movie from the array
        movies.splice(index, 1);
      
        // Send the updated list of movies as the response
        res.send(movies);
      });