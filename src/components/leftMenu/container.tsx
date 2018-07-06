import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { IState } from 'store/index'
import { userInterfaceLeftMenuToggle, leftMenuToggleType } from 'store/actions/userInterface'
import { getUserInterfaceLeftMenuDisplay } from 'store/selectors/userInterface'
import component from './component'

interface IMapStateToProps {
  isOpen: boolean
}

const mapStateToProps = (state: IState): IMapStateToProps => ({
  isOpen: getUserInterfaceLeftMenuDisplay(state)
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
)(component)

type Props = IMapStateToProps & IMapDispatchToProps

export {
  Props
}

export default container
