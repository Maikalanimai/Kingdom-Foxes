import React from "react";
import Axios from "axios";
import {withRouter} from 'react-router-dom'

function AdminSidebar(props) {
  const logout = () => {
    Axios.delete("/auth/logout").then(res => {
      res.status === 200 ? props.history.push("/") : alert("Logout Failed");
    });
  };

  return <div>AdminSidebar.jsx
    <button onClick={() => logout()}>Logout</button>
  </div>;
}

export default withRouter(AdminSidebar);
