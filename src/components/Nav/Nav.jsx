import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './nav.scss'

function Nav(props) {
  return(
    <div className='nav'>
      <ul>
        <Link to='/about'><li className='nav-list'>About</li></Link>
        <Link to='/anouncements'><li className='nav-list'>Anouncements</li></Link>
        {props.match.path==='/'? <></> : <Link to='/'><li className='nav-list'>Home</li></Link>}
        <Link to='/join/1'><li className='nav-list'>Join</li></Link>
        <Link to='/members'><li className='nav-list'>Members</li></Link>
      </ul>
    </div>
  )
}

export default withRouter(Nav)