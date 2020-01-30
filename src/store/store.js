import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as userReducer } from './user'

const rootReducer = combineReducers({ userReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export { store }
