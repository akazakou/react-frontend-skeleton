import * as React from 'react'
import * as propTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import LeftMenu from 'components/leftMenu'
import { Props } from 'components/appBar/container'

class ApplicationBar extends React.Component<Props> {
  static propTypes = {
    toggle: propTypes.func.isRequired
  }

  render () {
    const { toggle } = this.props
    return (
      <AppBar position='static'>
        <LeftMenu/>
        <Toolbar>
          <IconButton color='inherit' aria-label='Menu' onClick={() => toggle()}>
            <MenuIcon/>
          </IconButton>
          <Typography variant='title' color='inherit'>
            Application title
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default ApplicationBar
