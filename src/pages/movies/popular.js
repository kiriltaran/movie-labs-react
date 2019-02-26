import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class PopularMoviesPage extends Component {
  state = {
    popularMovies: [],
    activePage: 1,
  }

  async componentDidMount() {
    await this.fetchPopularMoviesPage()
  }

  handlePageChange = pageNumber => {
    this.fetchPopularMoviesPage(pageNumber)
  }

  async fetchPopularMoviesPage(pageNumber) {
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
    const { popularMovies, activePage } = this.state

    return (
      <section className="popular-movies">
        <MoviesList movies={popularMovies} />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </section>
    )
  }
}

export default PopularMoviesPage
