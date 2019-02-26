export default class Movies {
  constructor(httpClient) {
    this.http = httpClient
  }

  async fetchPopular({ page = 1 }) {
    const { data } = await this.http.get('/movie/popular', {
      params: {
        page,
      },
    })

    return data
  }

  async fetchUpcoming({ page = 1 }) {
    const { data } = await this.http.get('/movie/upcoming', {
      params: {
        page,
      },
    })

    return data
  }

  async fetchMovieDetails(id) {
    const { data } = await this.http.get(`/movie/${id}`, {
      params: {
        movie_id: id,
      },
    })

    return data
  }
}
