import React, { Component } from 'react'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class PopularMovies extends Component {
  state = {
    popularMovies: [],
    // totalPages: 0,
  }

  componentDidMount() {
    this.fetchPopularMovies()
  }

  handlePageClick = ({ selected }) => {
    this.fetchPopularMovies(selected)
  }

  async fetchPopularMovies(pageNumber) {
    try {
      // eslint-disable-next-line camelcase
      const { results } = await api.movies.fetchPopular({ page: pageNumber })
      this.setState({
        popularMovies: results,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { popularMovies } = this.state

    return (
      <section className="popular-movies">
        <div className="container-fluid">
          <MoviesList movies={popularMovies} />
        </div>
      </section>
    )
  }
}

export default PopularMovies
