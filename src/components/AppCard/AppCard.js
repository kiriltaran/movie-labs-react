import React from 'react'
import PropTypes from 'prop-types'
import './AppCard.css'

function AppCard({ children }) {
  return <div className="app-card">{children}</div>
}

AppCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default AppCard
