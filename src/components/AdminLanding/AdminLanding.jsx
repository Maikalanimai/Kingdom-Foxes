import React, {Component} from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import AdminApplication from './AdminApplication/AdminApplication'

class AdminLanding extends Component {

  render(){
    return(
      <div>
        <AdminHeader/>
        <AdminSidebar/>
        AdminLanding.jsx
        <AdminApplication/>
      </div>
    )
  }
}

export default AdminLanding