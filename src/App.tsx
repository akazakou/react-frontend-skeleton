import * as React from 'react'
import AppBar from './components/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles'

const lightMuiTheme = getMuiTheme(lightBaseTheme)

class App extends React.Component<any, any> {
  render () {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <AppBar/>
      </MuiThemeProvider>
    )
  }
}

export default App
