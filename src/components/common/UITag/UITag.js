import React from 'react'
import PropTypes from 'prop-types'
import './UITag.css'

function UITag({ children }) {
  return <div className="ui-tag">{children}</div>
}

UITag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default UITag
