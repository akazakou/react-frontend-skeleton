import { ActionData } from 'src/common/store'

export const types = {
  leftMenuDisplay: 'UserInterface/LeftMenu/Display',
  leftMenuHide: 'UserInterface/LeftMenu/Hide'
}

export const userInterfaceLeftMenuDisplay = (): ActionData => ({
  type: types.leftMenuDisplay,
  payload: {}
})
export const userInterfaceLeftMenuHide = (): ActionData => ({
  type: types.leftMenuHide,
  payload: {}
})
