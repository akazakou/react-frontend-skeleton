import { types } from 'actions/userInterface'
import { genericReducer } from 'common/reducers'

/**
 * Description of user interface state
 */
type LeftMenuType = {
  display: boolean
}

interface IUserInterface {
  leftMenu: LeftMenuType
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
  },

  /**
   * Toggle left menu user interface
   * @param {IUserInterface} state
   * @returns {IUserInterface}
   */
  [types.leftMenuToggle]: (state: IUserInterface): IUserInterface => {
    return {
      ...state,
      leftMenu: {
        ...state.leftMenu,
        display: !state.leftMenu.display
      }
    }
  }
}

export default genericReducer(initialState, reductions)

export {
  reductions,
  initialState,

  LeftMenuType,
  IUserInterface
}
