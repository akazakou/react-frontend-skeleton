import { Action } from 'redux'

type leftMenuDisplayType = 'UserInterface/LeftMenu/Display'
type leftMenuHideType = 'UserInterface/LeftMenu/Hide'
type leftMenuToggleType = 'UserInterface/LeftMenu/Toggle'

/**
 * Interface that described list of available action types
 */
interface ITypes {
  leftMenuDisplay: leftMenuDisplayType,
  leftMenuHide: leftMenuHideType,
  leftMenuToggle: leftMenuToggleType
}

/**
 * List of available action types
 * @type {ITypes}
 */
const types: ITypes = {
  leftMenuDisplay: 'UserInterface/LeftMenu/Display',
  leftMenuHide: 'UserInterface/LeftMenu/Hide',
  leftMenuToggle: 'UserInterface/LeftMenu/Toggle'
}

/**
 * List of available actions
 */
type IAction = Action<leftMenuDisplayType> | Action<leftMenuHideType> | Action<leftMenuToggleType>

/**
 * Show left menu for user interface
 * @returns {Action<leftMenuDisplayType>}
 */
const userInterfaceLeftMenuDisplay = (): Action<leftMenuDisplayType> => ({
  type: types.leftMenuDisplay
})

/**
 * Hide left menu for user interface
 * @returns {Action<leftMenuHideType>}
 */
const userInterfaceLeftMenuHide = (): Action<leftMenuHideType> => ({
  type: types.leftMenuHide
})

/**
 * Toggle left menu for user interface
 * @returns {Action<leftMenuToggleType>}
 */
const userInterfaceLeftMenuToggle = (): Action<leftMenuToggleType> => ({
  type: types.leftMenuToggle
})

export {
  types,
  IAction,

  leftMenuHideType,
  leftMenuDisplayType,
  leftMenuToggleType,

  userInterfaceLeftMenuHide,
  userInterfaceLeftMenuDisplay,
  userInterfaceLeftMenuToggle
}
