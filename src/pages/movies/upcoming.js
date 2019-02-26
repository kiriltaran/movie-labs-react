import React, { Component } from 'react'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class UpcomingMoviesPage extends Component {
  state = {
    upcomingMovies: [],
  }

  async componentDidMount() {
    await this.fetchUpcomingMoviesPage()
  }

  handlePageClick = ({ selected }) => {
    this.fetchUpcomingMoviesPage(selected)
  }

  async fetchUpcomingMoviesPage(pageNumber) {
    try {
      // eslint-disable-next-line camelcase
      const { results } = await api.movies.fetchUpcoming({ page: pageNumber })
      this.setState({
        upcomingMovies: results,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { upcomingMovies } = this.state

    return (
      <section className="Upcoming-movies">
        <MoviesList movies={upcomingMovies} />
      </section>
    )
  }
}

export default UpcomingMoviesPage
