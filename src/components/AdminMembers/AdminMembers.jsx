import React, { Component } from "react";
import AdminMember from "./AdminMember/AdminMember";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Axios from "axios";
import "./adminmembers.css";

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

  delete = (id, key) => {
    Axios
      .delete(`/admin/deletemember/${id}`)
      .then(() => {
        alert("Member Deleted");
        this.members.splice(key, 1)
      })
      .catch(err => {
        console.error(err);
        alert("Failed to delete member. See console for more details.");
      });
  };

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
    })
      .then(res => {
        this.setState({
          members: res.data
        });
      })
      .catch(err => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminSidebar />
        AdminMembers.jsx
        <div className="admin-members">
          {this.state.members.map((e, i) => {
            return (
              <AdminMember
                deleteMember={this.delete}
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
      </div>
    );
  }
}

export default AdminMembers;
