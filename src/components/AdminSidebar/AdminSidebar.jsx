import React from "react";
import Axios from "axios";
import { withRouter, Link } from "react-router-dom";
import './adminSidebar.scss'

function AdminSidebar(props) {
  const logout = () => {
    Axios.delete("/auth/logout").then(res => {
      res.status === 200 ? props.history.push("/") : alert("Logout Failed");
    });
  };

  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <Link to='/'>
          <li className='sidebar-item'>Home Page</li>
        </Link>
        <Link to='/admin/landing/'>
          <li className='sidebar-item'>Admin Landing</li>
        </Link>
        <Link to="/admin/members">
          <li className='sidebar-item'>Member List</li>
        </Link>
        <Link to="/admin/anounce">
          <li className='sidebar-item'>Create Anouncement</li>
        </Link>
        <Link to="/admin/addmember">
          <li className='sidebar-item'>Add Member</li>
        </Link>
        <div></div>
      <button onClick={() => logout()} className='sidebar-button'>Logout</button>
      </ul>
    </div>
  );
}

export default withRouter(AdminSidebar);
