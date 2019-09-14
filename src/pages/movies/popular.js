import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class PopularMoviesPage extends Component {
  state = {
    popularMovies: [],
    activePage: 1,
    totalResults: 0,
  }

  async componentDidMount() {
    await this.fetchPopularMovies()
  }

  handlePageChange = async pageNumber => {
    this.fetchPopularMovies(pageNumber)
  }

  async fetchPopularMovies(pageNumber) {
    try {
      // eslint-disable-next-line camelcase
      const { results, total_results } = await api.movies.fetchPopular(pageNumber)

      this.setState({
        popularMovies: results,
        totalResults: total_results,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { popularMovies, activePage, totalResults } = this.state

    return (
      <section className="popular-movies">
        <MoviesList movies={popularMovies} />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={totalResults}
          onChange={this.handlePageChange}
        />
      </section>
    )
  }
}

export default PopularMoviesPage
