import * as React from 'react'
import * as propTypes from 'prop-types'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import { Props } from 'components/leftMenu/container'

class TemporaryDrawer extends React.Component<Props> {
  static propTypes = {
    isOpen: propTypes.bool,
    toggle: propTypes.func.isRequired
  }

  render () {
    const { isOpen, toggle } = this.props

    return (
      <SwipeableDrawer open={isOpen} onClose={() => toggle()} onOpen={() => toggle()}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary='Inbox'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarIcon/>
            </ListItemIcon>
            <ListItemText primary='Starred'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary='Send mail'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary='Drafts'/>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem button>
            <ListItemIcon>
              <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='All mail'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeleteIcon/>
            </ListItemIcon>
            <ListItemText primary='Trash'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ReportIcon/>
            </ListItemIcon>
            <ListItemText primary='Spam'/>
          </ListItem>
        </List>
      </SwipeableDrawer>
    )
  }
}

export default TemporaryDrawer
