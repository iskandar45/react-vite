import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage, Login, Register } from '../pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
