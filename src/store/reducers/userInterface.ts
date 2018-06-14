import { types } from '../actions/userInterface'
import { genericReducer } from '../../common/reducers'

/**
 * Description of user interface state
 */
interface IUserInterface {
  leftMenu: {
    display: boolean
  }
}

/**
 * Initial state of user interface
 * @type {IUserInterface}
 */
const initialState: IUserInterface = {
  leftMenu: {
    display: false
  }
}

const reductions = {
  /**
   * Display left menu user interface
   * @param {IUserInterface} state
   * @returns {IUserInterface}
   */
  [types.leftMenuDisplay]: (state: IUserInterface): IUserInterface => {
    return {
      ...state,
      leftMenu: {
        ...state.leftMenu,
        display: true
      }
    }
  },

  /**
   * Hide left menu user interface
   * @param {IUserInterface} state
   * @returns {IUserInterface}
   */
  [types.leftMenuHide]: (state: IUserInterface): IUserInterface => {
    return {
      ...state,
      leftMenu: {
        ...state.leftMenu,
        display: false
      }
    }
  }
}

export default genericReducer(initialState, reductions)

export {
  reductions,
  IUserInterface,
  initialState
}
