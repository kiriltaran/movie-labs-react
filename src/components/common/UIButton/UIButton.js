import React from 'react'
import PropTypes from 'prop-types'
import './UIButton.css'

const UIButton = ({ children, type, text, onClick }) => {
  const handleClick = e => {
    onClick(e)
  }

  const classNames = ['ui-button', text && 'ui-button--text'].join(' ')

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={handleClick}>
      {children}
    </button>
  )
}

UIButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  text: PropTypes.bool,
  onClick: PropTypes.func,
}

UIButton.defaultProps = {
  type: 'submit',
  text: false,
  onClick: () => {},
}

export default UIButton
