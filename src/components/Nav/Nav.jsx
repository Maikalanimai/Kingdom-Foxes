import React from 'react'
import {withRouter, Link} from 'react-router-dom'

function Nav(props) {
  return(
    <div>
      Nav.jsx
      <ul>
        <Link to='/about'><li>about us</li></Link>
        <Link to='/anouncements'><li>public anouncements</li></Link>
        {props.match.path==='/'? <></> : <Link to='/'><li>Home</li></Link>}
        <Link to='/join/1'><li>join today</li></Link>
        <Link to='/members'><li>member list</li></Link>
      </ul>
    </div>
  )
}

export default withRouter(Nav)