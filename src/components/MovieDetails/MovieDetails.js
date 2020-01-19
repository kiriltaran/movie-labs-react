import React from 'react'
import PropTypes from 'prop-types'
import './MovieDetails.css'

import UITag from '../common/UITag'

function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <div className="movie-details__poster">
        <img
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt="movie-poster"
          className="poster-image"
        />
      </div>
      <div className="movie-details__info">
        <div className="info-item">
          <div className="title">{movie.title}</div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Release date:</div>
          <div className="info-item__value">{movie.release_date}</div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Genre:</div>
          <div className="info-item__value">
            {movie.genres.map(genre => (
              <span key={genre.id} className="genre">
                <UITag>{genre.name}</UITag>
              </span>
            ))}
          </div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Budget:</div>
          <div className="info-item__value">{movie.budget}$</div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Revenue:</div>
          <div className="info-item__value">{movie.revenue}$</div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Homepage:</div>
          <div className="info-item__value">
            <a href={movie.homepage}>{movie.homepage}</a>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Country:</div>
          <div className="info-item__value">
            {movie.production_countries.map(country => (
              <span key={country.name} className="country">
                {country.name}
              </span>
            ))}
          </div>
        </div>
        <div className="info-item">
          <div className="info-item__key">Description:</div>
          <div className="info-item__value">{movie.overview}</div>
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    homepage: PropTypes.string,
    production_countries: PropTypes.array,
    overview: PropTypes.string,
  }).isRequired,
}

export default MovieDetails
