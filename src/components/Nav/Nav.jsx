import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './nav.scss'

function Nav(props) {
  return(
    <div className='nav'>
      <ul>
        <Link to='/about'><li className='nav-list'>About Us</li></Link>
        <Link to='/anouncements'><li className='nav-list'>Public Anouncements</li></Link>
        {props.match.path==='/'? <></> : <Link to='/'><li className='nav-list'>Home</li></Link>}
        <Link to='/join/1'><li className='nav-list'>Join Today</li></Link>
        <Link to='/members'><li className='nav-list'>Member List</li></Link>
      </ul>
    </div>
  )
}

export default withRouter(Nav)