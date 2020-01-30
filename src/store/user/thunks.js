import { signin as signinAction, signup as signupAction } from './actions'
import * as api from '../../api'

const signin = ({ email, password }) => async dispatch => {
  const { user } = await api.auth.signin(email, password)

  dispatch(signinAction(user))
}

const signup = ({ email, password }) => async dispatch => {
  const { user } = await api.auth.signup(email, password)

  dispatch(signupAction(user))
}

export { signin, signup }
