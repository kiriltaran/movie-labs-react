import React, { Component } from 'react'

import MoviesList from '../../components/MoviesList'

class FavoritesMoviesPage extends Component {
  state = {
    movies: [
      { title: 1 },
      { title: 2 },
      { title: 3 },
      { title: 4 },
      { title: 5 },
      { title: 6 },
      { title: 7 },
      { title: 8 },
    ],
  }

  render() {
    const { movies } = this.state

    return (
      <section className="favorites-movies">
        <MoviesList movies={movies} />
      </section>
    )
  }
}

export default FavoritesMoviesPage
