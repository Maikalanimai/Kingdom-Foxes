import React , {Component} from 'react'
import Anouncement from './Anouncement/Anouncement'
import Nav from '../Nav/Nav.jsx'

class Anouncements extends Component {

  render(){
    return(
      <div>
        <Nav/>
        Anouncements.jsx
        <Anouncement/>
      </div>
    )
  }
}

export default Anouncements