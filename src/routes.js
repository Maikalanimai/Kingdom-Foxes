import React from 'react'
import { Switch , Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Anouncements from './components/Anouncements/Anouncements.jsx'
import About from './components/About/About.jsx'
import AdminLogin from './components/AdminLogin/AdminLogin.jsx'
import AdminLanding from './components/AdminLanding/AdminLanding.jsx'
import AdminMembers from './components/AdminMembers/AdminMembers.jsx'
import AdminCompose from './components/AdminCompose/AdminCompose.jsx'
import AddMember from './components/AdminMembers/AddMember.jsx'
import MemberList from './components/MemberList/MemberList.jsx'
import WizardOne from './components/Join/WizardOne/WizardOne.jsx'
import WizardTwo from './components/Join/WizardTwo/WizardTwo.jsx';
import WizardThree from './components/Join/WizardThree/WizardThree.jsx';

export default (
  <Switch>
    <Route exact path = '/'>
      <Home/>
    </Route>
    <Route path='/join/1'>
      <WizardOne/>
    </Route>
    <Route path='/join/2'>
      <WizardTwo/>
    </Route>
    <Route path='/join/3'>
      <WizardThree/>
    </Route>
    <Route path = '/anouncements'>
      <Anouncements/>
    </Route>
    <Route path = '/about'>
      <About/>
    </Route>
    <Route path ='/members'>
      <MemberList/>
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
    <Route path='/admin/addmember'>
      <AddMember/>
    </Route>
  </Switch>
)
