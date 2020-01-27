import { actionTypes } from '../../constants'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER: {
      return {
        ...state,
        ...payload,
      }
    }
    default:
      return state
  }
}
