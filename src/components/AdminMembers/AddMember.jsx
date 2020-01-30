import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import axios from "axios";

function AddMember() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");

  const addMember = () => {
    axios
      .post("/admin/member", { username, gender, country, time })
      .then(() => {
        alert("Member added");
        setUsername("");
        setGender("");
        setCountry("");
        setTime("");
      })
      .catch(err => {
        alert("an error occured");
        console.error(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <div className="add-member">
        <div className="inner-box">
          <input
            className="admin-input add"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="admin-input add"
            placeholder="Gender /M or F/"
            value={gender}
            maxLength={1}
            onChange={e => setGender(e.target.value)}
          />
          <input
            className="admin-input add"
            placeholder="Country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <input
            className="admin-input add"
            placeholder="YYYY-MM-DD"
            value={time}
            onChange={e => {
              setTime(e.target.value);
            }}
            type={Text}
          />
          <button className='add add-button' onClick={() => addMember()}>Add Member</button>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
