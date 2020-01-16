import React from 'react'
import {withRouter} from 'react-router-dom'

function Footer(props) {
  return (
    <div>
      Footer.jsx
      <button onClick={() => props.history.push('/admin')}>Admin page</button>
    </div>
  )
}

export default withRouter(Footer)