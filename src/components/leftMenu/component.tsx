import * as React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { mailFolderListItems, otherMailFolderListItems } from './tiledata'
import { Props } from 'components/leftMenu/container'

class TemporaryDrawer extends React.Component<Props> {

  render () {
    const { isOpen, toggle } = this.props

    return (
      <div>
        <SwipeableDrawer open={isOpen} onClose={() => toggle()} onOpen={() => toggle() }>
          <div tabIndex={0} role='button' onClick={() => toggle()}>
            <div>
              <List>{mailFolderListItems}</List>
              <Divider/>
              <List>{otherMailFolderListItems}</List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

export default TemporaryDrawer
