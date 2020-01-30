import { actionTypes } from '../../constants'

const initialState = {
  user: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER: {
      return {
        ...state,
        user: payload,
      }
    }
    default:
      return state
  }
}

export { reducer }
