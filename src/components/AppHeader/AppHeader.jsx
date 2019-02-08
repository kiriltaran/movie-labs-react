import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AppHeader.css'

class AppHeader extends Component {
  state = {
    navItems: [
      {
        title: 'Popular',
        path: '/',
      },
      {
        title: 'Upcoming',
        path: '/upcoming',
      },
      {
        title: 'Favorites',
        path: '/favorites',
      },
    ],
  }

  render() {
    const { navItems } = this.state
    return (
      <header className="app-header">
        <div className="title">Movie Labs</div>
        <nav className="nav">
          {navItems.map(navItem => (
            <Link to={navItem.path} key={navItem.path} className="nav-item">
              {navItem.title}
            </Link>
          ))}
        </nav>
      </header>
    )
  }
}

export default AppHeader
