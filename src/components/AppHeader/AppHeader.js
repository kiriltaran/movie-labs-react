import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './AppHeader.css'

import logoImg from '../../assets/logo.png'

const AppHeader = ({ user }) => {
  const [navItems] = useState([
    {
      title: 'Popular',
      path: '/movies/popular',
    },
    {
      title: 'Upcoming',
      path: '/movies/upcoming',
    },
    {
      title: 'Favorites',
      path: '/favorites',
    },
  ])

  return (
    <header className="app-header">
      <div className="app-header__column">
        <Link to="/" className="logo">
          <img src={logoImg} alt="logo" className="logo__img" />
        </Link>
        <nav className="nav">
          {navItems.map(navItem => (
            <NavLink
              to={navItem.path}
              key={navItem.path}
              activeClassName="nav__item--active"
              className="nav__item"
            >
              {navItem.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="app-header__column">
        <div className="auth">
          {/* <div className="auth-btn">
            <button type="button" onClick={() => setIsAuthorized(true)}>
              True
            </button>
          </div> */}
          {user && (
            <div className="auth-account">
              <div className="auth-account__email">{user.email}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

AppHeader.propTypes = {
  user: PropTypes.shape(),
}

AppHeader.defaultProps = {
  user: null,
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AppHeader)
