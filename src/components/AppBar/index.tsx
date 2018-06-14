import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/menu'
import './index.css'

class Login extends React.Component {
  render () {
    return (
      <FlatButton {...this.props} label='Login'/>
    )
  }
}

class Logged extends React.Component {
  public render () {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText='Refresh'/>
        <MenuItem primaryText='Help'/>
        <MenuItem primaryText='Sign out'/>
      </IconMenu>
    )
  }
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class ApplicationBar extends React.Component {
  state = {
    logged: true
  }

  handleChange = (event: any, logged: any) => {
    this.setState({ logged: logged })
  }

  render () {
    return (
      <AppBar
        title='Title'
        iconElementLeft={<IconButton><NavigationClose/></IconButton>}
        iconElementRight={this.state.logged ? <Logged/> : <Login/>}
        className='src_components_AppBar_className'
      />
    )
  }
}

export default ApplicationBar
