const axios = require('axios')

const getPopularMovie = (req, res) => {
  let popularMovieApiUrl = "https://api.themoviedb.org/3/movie/tidak_popular"

  axios.get(popularMovieApiUrl, {
    headers: {
      Authorization: "Bearer " + process.env.MOVIE_DB_API_KEY
    }
  })
    .then(response => {
      let movies = response.data.results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          popularity: movie.popularity
        }
      })
      res.send(movies)
    })
    .catch(err => {
      res.send(err)
    })
}

module.exports = {
  getPopularMovie
}