import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import './SigninForm.css'

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

const SigninForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema,
  })

  const runSubmitCb = credentials => {
    onSubmit(credentials)
  }

  return (
    <form className="signin-form" onSubmit={handleSubmit(runSubmitCb)}>
      <label htmlFor="email" className="signin-form-item">
        <div className="signin-form-item__label">Email</div>
        <input
          id="email"
          type="string"
          name="email"
          ref={register}
          className="signin-form-item__input"
        />
        {errors.email && <div className="signin-form-item__error">{errors.email.message}</div>}
      </label>

      {
        <label htmlFor="password" className="signin-form-item">
          <div className="signin-form-item__label">Password</div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register}
            className="signin-form-item__input"
          />
          {errors.password && (
            <div className="signin-form-item__error">{errors.password.message}</div>
          )}
        </label>
      }

      <UIButton>Signin</UIButton>
    </form>
  )
}

SigninForm.propTypes = {
  onSubmit: PropTypes.func,
}

SigninForm.defaultProps = {
  onSubmit: () => {},
}

export default SigninForm
