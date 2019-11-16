import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AppHeader.css'

import logoImg from '../../assets/logo.png'

class AppHeader extends Component {
  state = {
    navLinks: [
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
    ],
  }

  render() {
    const { navLinks } = this.state
    return (
      <header className="app-header">
        <Link to="/" className="logo">
          <img src={logoImg} alt="logo" className="logo__img" />
        </Link>
        <nav className="nav">
          {navLinks.map(navItem => (
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
      </header>
    )
  }
}

export default AppHeader
