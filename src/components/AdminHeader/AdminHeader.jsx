import React, { useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
import './adminHeader.css'

function AdminHeader(props) {
  const [username, setUsername] = useState([])

  useEffect(()=> {
    Axios.get('/auth/user').then(res => {
      setUsername(res.data.username) 
    }).catch(err => {
      props.history.push('/')
      alert (err.response.data)

    })
  })


  return (<div className='admin-header'>
    <div className='admin-user'>
    <h1>Welcome {username}!</h1>
      {props.match.path === '/admin/members' ? <h2 className='location'>Member List</h2>: <></>}
      {props.match.path === '/admin/addmember' ? <h2 className='location'>Add Member</h2>: <></>}
      {props.match.path === '/admin/anounce' ? <h2 className='location'>Create Anouncement</h2>: <></>}
      {props.match.path === '/admin/landing' ? <h2 className='location'>Applications</h2>: <></>}
    </div>
    <hr/>
  </div>)
}

export default withRouter(AdminHeader)