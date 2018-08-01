import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route } from 'react-router'
import { Provider as ReduxStoreProvider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import PageHome from 'pages/home'
import PageRegistration from 'pages/registration'
import store from 'store/index'
import { History } from 'history'

declare const module: NodeModule & {
  hot?: {
    accept (...args: any[]): any
  }
}

const history: History = createHistory()

class App extends React.Component<any, any> {
  public state = {
    screenOrientation: true
  }

  componentDidMount () {
    const onOrientationChange = () => {
      this.setState({
        screenOrientation: !this.state.screenOrientation
      })
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
        <Router history={history}>
          <div>
            <Route exact path='/' component={PageHome}/>
            <Route exact path='/registration' component={PageRegistration}/>
          </div>
        </Router>
      </ReduxStoreProvider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
)

// Used to fire hot updates with the webpack hot middleware
if (module.hot && module.hot.accept) {
  module.hot.accept()
}

registerServiceWorker()
