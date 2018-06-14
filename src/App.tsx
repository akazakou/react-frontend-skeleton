import * as React from 'react'
import AppBar from './components/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles'
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router'
import PageHome from './pages/home'
import { Provider as ReduxStoreProvider } from 'react-redux'
import store from './store'

const history = createHistory()

class App extends React.Component<any, any> {
  public state = {
    screenOrientation: true
  }

  componentDidMount () {
    const onOrientationChange = () => {
      this.setState({
        screenOrientation: !this.state.screenOrientation
      })

      console.debug('onorientationchange event emited')
    }

    if (window.hasOwnProperty('onorientationchange')) {
      window.addEventListener('orientationchange', onOrientationChange, false)
    } else if (window.hasOwnProperty('onresize')) {
      window.addEventListener('resize', onOrientationChange, false)
    }
  }

  render () {
    return (
      <ReduxStoreProvider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <AppBar/>
            <Router history={history}>
              <Route path='/' component={PageHome}/>
            </Router>
          </div>
        </MuiThemeProvider>
      </ReduxStoreProvider>
    )
  }
}

export default App
