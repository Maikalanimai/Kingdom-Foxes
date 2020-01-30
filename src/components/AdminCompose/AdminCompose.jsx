import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Axios from "axios";
import "./adminCompose.css";

function AdminCompose() {
  const [content, setContent] = useState("");

  const submit = () => {
    Axios.post("admin/post", { content })
      .then(res => {
        alert("Anouncement Added");
        setContent("");
      })
      .catch(err => {
        alert("Post failed, check console for details");
        console.error(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <div className="admin-compose">
        <textarea
          onChange={e => setContent(e.target.value)}
          value={content}
          placeholder="Post Body"
          className="compose-area"
        />
        <button className="compose-button add-button add" onClick={() => submit()}>
          ＞Post＜
        </button>
      </div>
    </div>
  );
}

export default AdminCompose;
