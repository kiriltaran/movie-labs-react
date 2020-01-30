import { actionTypes } from '../../constants'

const signin = user => ({
  type: actionTypes.SET_USER,
  payload: user,
})

const signup = user => ({
  type: actionTypes.SET_USER,
  payload: user,
})

export { signin, signup }
