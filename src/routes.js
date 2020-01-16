import React from 'react'
import { Switch , Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Join from './components/Join/Join.jsx'
import Anouncements from './components/Anouncements/Anouncements.jsx'
import About from './components/About/About.jsx'
import AdminLogin from './components/AdminLogin/AdminLogin.jsx'
import AdminLanding from './components/AdminLanding/AdminLanding.jsx'
import AdminMembers from './components/AdminMembers/AdminMembers.jsx'
import AdminCompose from './components/AdminCompose/AdminCompose.jsx'

export default (
  <Switch>
    <Route exact path = '/'>
      <Home/>
    </Route>
    <Route path='/join'>
      <Join/>
    </Route>
    <Route path = '/anouncements'>
      <Anouncements/>
    </Route>
    <Route path = '/about'>
      <About/>
    </Route>
    <Route exact path = '/admin'>
      <AdminLogin/>
    </Route>
    <Route path='/admin/landing'>
      <AdminLanding/>
    </Route>
    <Route path='/admin/members'>
      <AdminMembers/>
    </Route>
    <Route path='/admin/anounce'>
      <AdminCompose/>
    </Route>
  </Switch>
)
