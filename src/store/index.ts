import { createStore, applyMiddleware, compose } from 'redux'
import appReducer from './reducers'

const reduxThunk: any = require('redux-thunk')

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export default createStore(appReducer, composeEnhancers(applyMiddleware(reduxThunk.default)))
