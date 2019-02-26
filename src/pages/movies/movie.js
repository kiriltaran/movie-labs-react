import React, { Component } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import api from '../../api'

import MovieDetails from '../../components/MovieDetails'

class MoviePage extends Component {
  state = {
    movie: null,
  }

  async componentDidMount() {
    await this.loadMovieDetails()
  }

  async componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id },
      },
    } = this.props

    if (prevProps.match.params.id !== id) {
      await this.loadMovieDetails()
    }
  }

  async loadMovieDetails() {
    try {
      const {
        match: {
          params: { id },
        },
      } = this.props
      const movie = await api.movies.fetchMovieDetails(id)
      this.setState({
        movie,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { movie } = this.state

    return <section className="movie">{movie && <MovieDetails movie={movie} />}</section>
  }
}

MoviePage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
}

export default MoviePage
