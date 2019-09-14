import { mdbClient } from '../clients'

const fetchPopular = (page = 1) => {
  return mdbClient.get('/movie/popular', {
    params: {
      page,
    },
  })
}

const fetchUpcoming = (page = 1) => {
  return mdbClient.get('/movie/upcoming', {
    params: {
      page,
    },
  })
}

const fetchMovieDetails = id => {
  return mdbClient.get(`/movie/${id}`, {
    params: {
      movie_id: id,
    },
  })
}

export default {
  fetchPopular,
  fetchUpcoming,
  fetchMovieDetails,
}
