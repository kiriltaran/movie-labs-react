import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './AuthBar.css'

import UIButton from '../common/UIButton'
import SigninForm from '../SigninForm'
import SignupForm from '../SignupForm'

function AuthBar({ visible, signup, onToggleForm, onClose }) {
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : null
  }, [visible])

  const handleCloseClick = () => {
    onClose()
  }

  return (
    <>
      <CSSTransition in={visible} timeout={300} mountOnEnter unmountOnExit classNames="fade">
        <div className="auth-bar-overlay" />
      </CSSTransition>
      <CSSTransition in={visible} timeout={300} mountOnEnter unmountOnExit classNames="slide">
        <div className="auth-bar">
          <button type="button" className="close-btn" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="auth-bar__form">{signup ? <SignupForm /> : <SigninForm />}</div>
          <div className="auth-bar__toggler">
            <div className="or">or</div>
            <UIButton text onClick={() => onToggleForm()}>
              Signin
            </UIButton>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

AuthBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  signup: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AuthBar
