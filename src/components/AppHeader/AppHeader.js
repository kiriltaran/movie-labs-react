import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import './AppHeader.css'

import UIButton from '../common/UIButton'

import logoImg from '../../assets/logo.png'

const AppHeader = ({ onAuth }) => {
  const user = useSelector(state => state.userReducer.user)

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

  const handleAuthClick = () => {
    onAuth()
  }

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
          {user ? (
            <div className="auth-account">
              <div className="auth-account__email">{user.email}</div>
            </div>
          ) : (
            <UIButton text onClick={handleAuthClick}>
              <FontAwesomeIcon icon={faSignInAlt} size="lg" />
            </UIButton>
          )}
        </div>
      </div>
    </header>
  )
}

AppHeader.propTypes = {
  onAuth: PropTypes.func.isRequired,
}

export default AppHeader
