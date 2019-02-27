import { mdbClient } from '../clients'

const fetchPopular = async ({ page = 1 }) => {
  const { data } = await mdbClient.get('/movie/popular', {
    params: {
      page,
    },
  })

  return data
}

const fetchUpcoming = async ({ page = 1 }) => {
  const { data } = await mdbClient.get('/movie/upcoming', {
    params: {
      page,
    },
  })

  return data
}

const fetchMovieDetails = async id => {
  const { data } = await mdbClient.get(`/movie/${id}`, {
    params: {
      movie_id: id,
    },
  })

  return data
}

export default { fetchPopular, fetchUpcoming, fetchMovieDetails }
