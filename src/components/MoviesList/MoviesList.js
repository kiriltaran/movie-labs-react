import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import './MoviesList.css'

import AppCard from '../common/AppCard'
import AppButton from '../common/AppButton'

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <div className="movies-list__item" key={movie.id}>
          <AppCard>
            <div className="item-content">
              <div className="item-content__poster">
                <img
                  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  className="poster-image"
                  alt="poster"
                />
              </div>
              <div className="item-content__tile">
                <div className="tile-info">
                  <div className="tile-info__title">{movie.title}</div>
                  <div className="tile-info__vote">{movie.vote_average}</div>
                </div>
                <div className="tile-button">
                  <AppButton to={`/movies/${movie.id}`}>More</AppButton>
                </div>
              </div>
            </div>
          </AppCard>
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
