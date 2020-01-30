import React, { Component } from 'react'
import * as api from '../api'

import MoviesList from '../components/MoviesList'

class MoviesUpcomingRoute extends Component {
  state = {
    upcomingMovies: [],
  }

  async componentDidMount() {
    await this.fetchUpcominMovies()
  }

  handlePageClick = ({ selected }) => {
    this.fetchUpcominMovies(selected)
  }

  async fetchUpcominMovies(pageNumber) {
    try {
      const { results } = await api.movies.fetchUpcoming(pageNumber)

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
      <section className="movies-upcoming">
        <MoviesList movies={upcomingMovies} />
      </section>
    )
  }
}

export default MoviesUpcomingRoute
