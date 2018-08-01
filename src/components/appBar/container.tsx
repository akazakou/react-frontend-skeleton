import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { userInterfaceLeftMenuToggle, leftMenuToggleType } from 'actions/userInterface'
import component from './component'

interface IMapDispatchToProps {
  toggle: () => Action<leftMenuToggleType>
}

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  toggle: () => dispatch(userInterfaceLeftMenuToggle())
})

const container = connect(
  undefined,
  mapDispatchToProps
)(component)

type Props = IMapDispatchToProps

export {
  Props
}

export default container
