import * as React from 'react'
import { func, bool } from 'prop-types'
import { IMapStateToProps, IMapDispatchToProps } from './container'
import Button from '@material-ui/core/Button'

const Home: React.StatelessComponent = ({ toggle, isDisplayed }: IMapStateToProps & IMapDispatchToProps) => (
  <div>
    <Button onClick={() => toggle()}>{isDisplayed ? 'true' : 'false'}</Button>
  </div>
)

Home.propTypes = {
  isDisplayed: bool,
  toggle: func.isRequired
}

export default Home
