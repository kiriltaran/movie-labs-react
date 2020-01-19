import React from 'react'
import PropTypes from 'prop-types'
import './UICard.css'

function UICard({ children }) {
  return <div className="ui-card">{children}</div>
}

UICard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default UICard
