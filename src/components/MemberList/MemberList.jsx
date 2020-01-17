import React from 'react'
import Member from './Member/Member.jsx'
import Nav from '../Nav/Nav.jsx'

class MemberList extends React.Component {
  
  render(){
    return(
      <div>
        <Nav/>
        MemberList.jsx
        <Member/>
      </div>
    )
  }
}

export default MemberList