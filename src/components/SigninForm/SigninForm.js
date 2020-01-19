import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import api from '../../api'
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

function SigninForm() {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema,
  })

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await api.auth.signin(email, password)

      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
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

export default SigninForm
