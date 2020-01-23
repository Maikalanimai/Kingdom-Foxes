import React from "react";
import Nav from "../Nav/Nav.jsx";
import Axios from "axios";
import MyTimeline from './Timeline.jsx'
import data from '../../assets/custom.geo.json'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      randStats: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("/api/randStats").then(res => {
      this.setState({
        randStats: res.data,
        loading: false
      });
    });
  }

  returnRandStats = () => {
    return (
      <>
        <p>Chests Found: {this.state.randStats[0][0].sum}</p>
        <p>
          Combined Level of all guild members: {this.state.randStats[1][0].sum}
        </p>
        <p>
          Combined Deaths of all guild members: {this.state.randStats[2][0].sum}
        </p>
        <p>
          Combined Logins of all guild members: {this.state.randStats[3][0].sum}
        </p>
        <p>
          Combined mob kills of all guild members:{" "}
          {this.state.randStats[4][0].sum}
        </p>
        <p>
          Combined days of playtime: {Math.trunc(this.state.randStats[5][0].sum / 60 / 24)}
        </p>
        <p>
          Kilometers Traveled: {Math.trunc(this.state.randStats[6][0].sum / 1000)}
        </p>
        <p>
          Members from {this.state.randStats[7][0].count} countries!
        </p>
        <MyTimeline data={data}/>
      </>
    );
  };
  render() {
    return (
      <div>
        <Nav />
        About.jsx
        {!this.state.loading ? this.returnRandStats() : <></>}
      </div>
    );
  }
}

export default About;
