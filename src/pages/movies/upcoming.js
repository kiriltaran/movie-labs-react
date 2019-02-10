import React, { Component } from 'react'
import api from '../../api'

import MoviesList from '../../components/MoviesList'

class UpcomingMovies extends Component {
  state = {
    upcomingMovies: [],
  }

  componentDidMount() {
    this.fetchUpcomingMovies()
  }

  handlePageClick = ({ selected }) => {
    this.fetchUpcomingMovies(selected)
  }

  async fetchUpcomingMovies(pageNumber) {
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
        <div className="container-fluid">
          <MoviesList movies={upcomingMovies} />
        </div>
      </section>
    )
  }
}

export default UpcomingMovies
