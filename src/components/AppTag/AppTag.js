import React from 'react'
import PropTypes from 'prop-types'
import './AppTag.css'

function AppTag({ children }) {
  return <div className="app-tag">{children}</div>
}

AppTag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AppTag
