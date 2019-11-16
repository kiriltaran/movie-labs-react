import React, { Component } from 'react'

import MoviesList from '../components/MoviesList'

class FavoritesRoute extends Component {
  state = {
    movies: [],
  }

  render() {
    const { movies } = this.state

    return (
      <section className="movies-favorites">
        <MoviesList movies={movies} />
      </section>
    )
  }
}

export default FavoritesRoute
