import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./adminLogin.scss";

function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("/auth/register", { username, password })
      .then(res => {
        console.log(res.data);
        setUsername("");
        setPassword("");
      })
      .catch(err => {
        alert(err.response.data);
        setUsername("");
        setPassword("");
      });
  };

  const login = () => {
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        alert("Login Successful!");
        setUsername("");
        setPassword("");
        props.history.push("/admin/landing");
      })
      .catch(err => {
        alert(err.response.data);
        setUsername("");
        setPassword("");
      });
  };

  useEffect(() => {
    axios.get("/auth/user").then(res => {
      if (res.data) return props.history.push("/admin/landing");
    });
  }, [props.history]);
  return (
    <div className="page">
      <button className="back-main" onClick={() => props.history.push("/")}>
        ＜＜Go Back
      </button>
      <div className="inner-login ">
        <input
          className="username admin-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
        />
        <input
          className="password admin-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <div className="buttons">
          <button onClick={() => register()} className="register login-but">
            Register
          </button>
          <button onClick={() => login()} className="login login-but">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AdminLogin);
