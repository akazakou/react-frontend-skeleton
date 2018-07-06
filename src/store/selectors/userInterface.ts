import { createSelector } from 'reselect'
import { IUserInterface, LeftMenuType } from 'reducers/userInterface'
import { IState } from '../index'

const getUserInterface = createSelector(
  [(state: IState): IState => state],
  (state: IState) => state.userInterface
)

const getUserInterfaceLeftMenu = createSelector(
  [getUserInterface],
  (userInterface: IUserInterface) => userInterface.leftMenu
)

const getUserInterfaceLeftMenuDisplay = createSelector(
  [getUserInterfaceLeftMenu],
  (leftMenu: LeftMenuType) => leftMenu.display
)

export {
  getUserInterface,
  getUserInterfaceLeftMenu,
  getUserInterfaceLeftMenuDisplay
}
