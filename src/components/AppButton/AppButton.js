import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { withRouter } from 'react-router-dom'
import './AppButton.css'

class AppButton extends Component {
  handleClick = () => {
    const { history, to } = this.props
    if (to) {
      history.push(to)
    }
  }

  render() {
    const { children } = this.props
    return (
      <button type="button" className="app-button" onClick={this.handleClick}>
        {children}
      </button>
    )
  }
}

AppButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
}

AppButton.defaultProps = {
  to: '',
}

export default withRouter(AppButton)
