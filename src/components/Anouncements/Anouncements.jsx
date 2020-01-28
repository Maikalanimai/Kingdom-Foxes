import React, { Component } from "react";
import Anouncement from "./Anouncement/Anouncement";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Axios from "axios";
import './anouncements.css'

class Anouncements extends Component {
  constructor() {
    super();
    this.state = {
      anouncements: [],
      isAdmin: false
    };
  }

  componentDidMount() {
    Axios.get("/api/anouncements").then(res => {
      this.setState({
        anouncements: res.data
      });
    });
    Axios.get("/auth/user")
      .then(res => {
        this.setState({
          isAdmin: true
        });
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  deleteAnouncement = id => {
    Axios.delete(`/admin/anouncement/remove/${id}`)
      .then(res => {
        this.setState({
          anouncements: res.data
        });
        alert("Anouncement Removed");
      })
      .catch(err => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <h1 className='anouncements-header'>Anouncements</h1>
        <div className='anouncements-main'>
        {this.state.anouncements.map(e => {
          return (
            <Anouncement
              deleteAnouncement={this.deleteAnouncement}
              isAdmin={this.state.isAdmin}
              id={e.id}
              key={e.id}
              rank={e.rank}
              poster={e.poster}
              content={e.post_body}
            />
          );
        })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Anouncements;
