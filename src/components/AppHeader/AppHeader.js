import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AppHeader.css'

import logoImg from '../../assets/logo.png'

class AppHeader extends Component {
  state = {
    navItems: [
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
        path: '/movies/favorites',
      },
    ],
  }

  render() {
    const { navItems } = this.state
    return (
      <header className="app-header">
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
      </header>
    )
  }
}

export default AppHeader
