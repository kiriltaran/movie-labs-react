import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { withRouter } from 'react-router-dom'
import './MoviesList.css'

import UICard from '../common/UICard'
import UIButton from '../common/UIButton'

function MoviesList({ movies, history }) {
  const handleMoreBtnClick = movieId => {
    history.push(`/movies/${movieId}`)
  }

  return (
    <div className="movies-list">
      {movies.map(movie => (
        <div className="movies-list__item" key={movie.id}>
          <UICard>
            <div className="item-content">
              <div className="item-content__poster">
                <img
                  src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
                  <UIButton onClick={() => handleMoreBtnClick(movie.id)}>More</UIButton>
                </div>
              </div>
            </div>
          </UICard>
        </div>
      ))}
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  history: ReactRouterPropTypes.history.isRequired,
}

MoviesList.defaultProps = {
  movies: [],
}

export default withRouter(MoviesList)
