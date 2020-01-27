import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import './SignupForm.css'

import UIButton from '../common/UIButton'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
})

const SignupForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema,
  })

  const runSubmitCb = credentials => {
    onSubmit(credentials)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit(runSubmitCb)}>
      <label htmlFor="email" className="signup-form-item">
        <div className="signup-form-item__label">Email</div>
        <input
          id="email"
          type="string"
          name="email"
          ref={register}
          className="signup-form-item__input"
        />
        {errors.email && <div className="signup-form-item__error">{errors.email.message}</div>}
      </label>

      {
        <label htmlFor="password" className="signup-form-item">
          <div className="signup-form-item__label">Password</div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register}
            className="signup-form-item__input"
          />
          {errors.password && (
            <div className="signup-form-item__error">{errors.password.message}</div>
          )}
        </label>
      }

      <UIButton>Signup</UIButton>
    </form>
  )
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
}

SignupForm.defaultProps = {
  onSubmit: () => {},
}

export default SignupForm
