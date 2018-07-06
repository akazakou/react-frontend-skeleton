import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  StoreEnhancer,
  combineReducers,
  Store
} from 'redux'
import thunk from 'redux-thunk'
import { default as userInterface, IUserInterface } from './reducers/userInterface'
import { IAction as userInterfaceActions } from './actions/userInterface'

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? (arguments: any): StoreEnhancer<any, any>
}

/**
 * Root store interface
 */
type IState = {
  userInterface: IUserInterface
}

/**
 * List of available actions in current store
 */
type IAction = userInterfaceActions

/**
 * Define root reducers for application
 * @type {Reducer<any>}
 */
const reducers = combineReducers({
  userInterface
})

/**
 * Define thunk middlewares and other middlewares
 * @type {ThunkMiddleware & {withExtraArgument(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>}[]}
 */
const middlewares: Middleware[] = [
  thunk
]

/**
 * Compose enhancers
 */
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const store: Store<IState, IAction> = createStore(reducers, composeEnhancers(
  applyMiddleware(...middlewares)
))

export {
  IState,
  IAction
}

export default store
