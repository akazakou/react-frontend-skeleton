import * as React from 'react'
import { func, bool } from 'prop-types'
import { IMapStateToProps, IMapDispatchToProps } from './container'
import ApplicationBar from 'components/appBar'

const Home: React.StatelessComponent = ({ toggle, isDisplayed }: IMapStateToProps & IMapDispatchToProps) => (
  <div>
    <ApplicationBar />
    <div>
      <h1>test</h1>
    </div>
  </div>
)

Home.propTypes = {
  isDisplayed: bool,
  toggle: func.isRequired
}

export default Home
