import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import api from '../../api'
import { userActions } from '../../store'

import './AuthBar.css'

import UIButton from '../common/UIButton'
import SigninForm from '../SigninForm'
import SignupForm from '../SignupForm'

function AuthBar({ isVisible, onClose }) {
  const dispatch = useDispatch()
  const [isSignup, setIsSignup] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : null
  }, [isVisible])

  const handleCloseClick = () => {
    onClose()
  }

  const handleSignup = async ({ email, password }) => {
    try {
      const { user } = await api.auth.signup(email, password)

      dispatch(userActions.signup(user))
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignin = async ({ email, password }) => {
    try {
      const { user } = await api.auth.signin(email, password)

      dispatch(userActions.signin(user))
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <CSSTransition in={isVisible} timeout={300} mountOnEnter unmountOnExit classNames="fade">
        <div className="auth-bar-overlay" />
      </CSSTransition>
      <CSSTransition in={isVisible} timeout={300} mountOnEnter unmountOnExit classNames="slide">
        <div className="auth-bar">
          <div className="close-btn">
            <UIButton text onClick={handleCloseClick}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </UIButton>
          </div>
          <div className="auth-bar__form">
            {isSignup ? (
              <SignupForm onSubmit={handleSignup} />
            ) : (
              <SigninForm onSubmit={handleSignin} />
            )}
          </div>
          <div className="auth-bar__toggler">
            <div className="or">or</div>
            <UIButton text onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Signin' : 'Signup'}
            </UIButton>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

AuthBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AuthBar
