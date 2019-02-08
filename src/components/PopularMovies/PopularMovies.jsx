import React, { Component } from 'react'
import api from '../../api'

import MoviesList from '../MoviesList'

class PopularMovies extends Component {
  state = {
    popularMovies: [],
    totalPages: 0,
  }

  componentDidMount() {
    this.fetchPopularMovies()
  }

  async fetchPopularMovies(pageNumber) {
    try {
      // eslint-disable-next-line camelcase
      const { results, total_pages } = await api.movies.fetchPopular({ page: pageNumber })
      this.setState({
        popularMovies: results,
        totalPages: total_pages,
      })
    } catch (error) {
      console.log(error)
    }
  }

  handlePageClick = ({ selected }) => {
    this.fetchPopularMovies(selected)
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
