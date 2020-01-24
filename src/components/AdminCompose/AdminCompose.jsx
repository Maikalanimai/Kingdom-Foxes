import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Axios from "axios";

function AdminCompose() {
  const [content, setContent] = useState("");

  const submit = () => {
    Axios.post("admin/post", { content }).then(res => {
      alert("Anouncement Added");
      setContent("");
    }).catch(err => {
      alert('Post failed, check console for details')
      console.error(err)
    });
  };

  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      AdminCompose.jsx
      <textarea
        onChange={e => setContent(e.target.value)}
        value={content}
        placeholder="Post Body"
      />
      <button onClick={() => submit()}>Post</button>
    </div>
  );
}

export default AdminCompose;
