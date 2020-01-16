import React, {Component} from 'react'
import AdminMember from './AdminMember/AdminMember'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSidebar from '../AdminSidebar/AdminSidebar'

class AdminMembers extends Component {


  render(){
    return(
      <div>
        <AdminHeader/>
        <AdminSidebar/>
        AdminMembers.jsx
        <AdminMember/>
      </div>
    )
  }
}

export default AdminMembers