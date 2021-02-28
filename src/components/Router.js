import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
function Router() {
    return (
        <>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/service" component={Service}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/" />
          </Switch>  
        </>
    )
}

export default Router
