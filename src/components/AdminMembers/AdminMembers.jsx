import React, { Component } from "react";
import AdminMember from "./AdminMember/AdminMember";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Axios from "axios";

class AdminMembers extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    Axios.get("/admin/members").then(res => {
      this.setState({
        members: res.data
      });
    });
  }

  submitChange = (
    username,
    dateJoined,
    gender,
    region,
    rank,
    nobleClass,
    medals,
    country,
    admin,
    pm,
    id
  ) => {
    Axios.put(`/admin/members/${id}`, {
      username,
      dateJoined,
      gender,
      region,
      rank,
      nobleClass,
      medals,
      country,
      admin,
      pm,
      id
    }).then(res => {
      this.setState({
        members: res.data
      });
    }).catch(err => {
      console.warn(err)
    });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminSidebar />
        AdminMembers.jsx
        {this.state.members.map((e, i) => {
          return (
            <AdminMember
              key={e.id}
              id={e.id}
              username={e.username}
              dateJoined={e.date_joined}
              gender={e.gender}
              region={e.region}
              rank={e.rank}
              nobleClass={e.class}
              medals={e.medals}
              country={e.country}
              admin={e.admin_authorized}
              pm={e.is_pm}
              submitChange={this.submitChange}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminMembers;
