import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { IState } from 'store/index'
import { userInterfaceLeftMenuToggle, leftMenuToggleType } from 'store/actions/userInterface'
import { getUserInterfaceLeftMenuDisplay } from 'store/selectors/userInterface'
import HomePageComponent from './component'

interface IMapStateToProps {
  isDisplayed: boolean
}

const mapStateToProps = (state: IState): IMapStateToProps => ({
  isDisplayed: getUserInterfaceLeftMenuDisplay(state)
})

interface IMapDispatchToProps {
  toggle: () => Action<leftMenuToggleType>
}

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  toggle: () => dispatch(userInterfaceLeftMenuToggle())
})

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent)

export {
  IMapStateToProps,
  IMapDispatchToProps
}

export default container
