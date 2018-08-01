import * as React from 'react'
import ApplicationBar from 'components/appBar'
import RegistrationForm from 'forms/registration'

const Registration: React.StatelessComponent = () => (
  <div>
    <ApplicationBar/>
    <RegistrationForm handleSubmit={event => {
      event.preventDefault()
      console.log(event)
    }}/>
  </div>
)

export default Registration
