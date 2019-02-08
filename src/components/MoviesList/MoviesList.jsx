import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './MoviesList.css'

import AppCard from '../AppCard'

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <div className="movies-item" key={movie.id}>
          <AppCard
            content={
              <Fragment>
                <img
                  src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt="movie-poster"
                />
                <h2>{movie.title}</h2>
                <div>{movie.vote_average}</div>
              </Fragment>
            }
          />
        </div>
      ))}
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

MoviesList.defaultProps = {
  movies: [],
}

export default MoviesList
