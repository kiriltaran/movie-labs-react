import { createStore, combineReducers } from 'redux'
import { reducer as userReducer } from './user'

const rootReducer = combineReducers({ userReducer })

export default createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
