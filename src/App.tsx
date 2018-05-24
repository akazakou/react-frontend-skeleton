import * as React from 'react'
import AppBar from './components/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles'
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router'
import PageHome from './pages/home'

const lightMuiTheme = getMuiTheme(lightBaseTheme)

class App extends React.Component<any, any> {
  render () {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <AppBar/>
          <Router history={createHistory()}>
            <Route path='/' component={PageHome}/>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
