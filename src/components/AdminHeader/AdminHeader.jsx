import React, { useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'

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
  return (<div>
    AdminHeader.jsx
    Welcome {username}!
  </div>)
}

export default withRouter(AdminHeader)