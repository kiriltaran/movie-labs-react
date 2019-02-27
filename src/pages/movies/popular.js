import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class PopularMoviesPage extends Component {
  state = {
    popularMovies: [],
    activePage: 1,
    totalCount: 0,
  }

  async componentDidMount() {
    await this.fetchPopularMovies()
    await api.auth.signup('qwe@qwe.qwe', 'qweqweqwe')
  }

  handlePageChange = async pageNumber => {
    await this.fetchPopularMovies(pageNumber)
  }

  async fetchPopularMovies(pageNumber) {
    try {
      // eslint-disable-next-line camelcase
      const { results, total_results } = await api.movies.fetchPopular({ page: pageNumber })
      this.setState({
        popularMovies: results,
        totalCount: total_results,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { popularMovies, activePage, totalCount } = this.state

    return (
      <section className="popular-movies">
        <MoviesList movies={popularMovies} />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={totalCount}
          onChange={this.handlePageChange}
        />
      </section>
    )
  }
}

export default PopularMoviesPage
