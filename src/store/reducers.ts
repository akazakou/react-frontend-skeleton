import { combineReducers } from 'redux'
import { default as userInterface } from './reducers/userInterface'

const appReducer = combineReducers({
  userInterface
})

export default appReducer
