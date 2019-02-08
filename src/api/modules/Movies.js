export default class Movies {
  constructor(httpClient) {
    this.http = httpClient
  }

  async fetchPopular({ page = 1 }) {
    try {
      const { data } = await this.http.get('/movie/popular', {
        params: {
          page,
        },
      })

      return data
    } catch (err) {
      throw err
    }
  }

  async fetchUpcoming({ page = 1 }) {
    try {
      const { data } = await this.http.get('/movie/upcoming', {
        params: {
          page,
        },
      })

      return data
    } catch (err) {
      throw err
    }
  }
}
