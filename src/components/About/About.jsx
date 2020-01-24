import React from "react";
import Nav from "../Nav/Nav.jsx";
import Axios from "axios";
import MyTimeline from "./Timeline.jsx";
import data from "../../assets/custom.geo.json";
import Footer from "../Footer/Footer.jsx";
import "./About.scss";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      randStats: [],
      loading: true,
      countries: []
    };
  }

  componentDidMount() {
    Axios.get("/api/randStats").then(res => {
      this.setState({
        randStats: res.data,
        loading: false
      });
    });
    Axios.get("/api/map").then(res => {
      const countries = res.data.map(e => e.country);
      this.setState(
        {
          countries: countries
        }
        
      );
    });
  }

  returnRandStats = () => {
    return (
      <div className="rand-stats culture">
        <div className="stat">
          <p>Combined Level</p>
          <p>{this.state.randStats[1][0].sum}</p>
        </div>
        <div className="stat">
          <p>Combined Deaths</p>
          <p>{this.state.randStats[2][0].sum}</p>
        </div>
        <div className="stat">
          <p>Combined Logins</p>
          <p>{this.state.randStats[3][0].sum}</p>
        </div>
        <div className="stat">
          <p>Combined Mob Kills </p>
          <p>{this.state.randStats[4][0].sum}</p>
        </div>
        <div className="stat">
          <p>Kilometers Traveled </p>
          <p>{Math.trunc(this.state.randStats[6][0].sum / 1000)}</p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Nav />
        <main className="about-layout">
          <div className="weight-right">
            <h1 className="seg-title">Our Culture</h1>
            <p className="culture">
              Who are the Foxes? We are strong and resilient. Throughout our
              history we've come across many hardships, but each time we rise to
              face every challenge. We are loyal and duty bound. We stand by our
              friends and never refuse to help. We are organized and
              professional. We respect the chain of command and understand the
              importance of being well disciplined and not looking like a fool.
              The culture of our guild is defined by the balance we have of
              community and professionalism.
            </p>
          </div>
          <div className="weight-left">
            <MyTimeline data={data} memberCountries={this.state.countries} />
            <h2 className="seg-title global">
              We are a global guild with members in{" "}
              {this.state.loading ? "many" : this.state.randStats[7][0].count}{" "}
              countries.
            </h2>
          </div>
          <div className="involved">
            <h1 className="seg-title">We Are Involved</h1>
            {!this.state.loading ? this.returnRandStats() : <></>}
          </div>
          <div className="learn-more">
            <h1 className="seg-title learn">Learn More</h1>
          </div>
          <ul className="learn-options">
            <a href="https://docs.google.com/document/d/1LgIWng4lJbPTvY2-WI4_J2MCJDZC0jEurdFrgaLeEr4/">
              <li className="learn-option">Ranks</li>
            </a>
            <a href="https://docs.google.com/document/d/1Rr5ubU6iySPyQdrso6___WxRE_XZEJ7JuSWVoQqMLqE">
              <li className="learn-option">Institutions</li>
            </a>
            <a href="https://docs.google.com/document/d/1V55JDH-HHKQzIt-5aXcdFgFvGqFWqcdHsj-G4MlNvs4">
              <li className="learn-option">Medals</li>
            </a>
            <a href="https://docs.google.com/document/d/1kaJuLCRdc0CPf1JePHiXMOO0J-TKDw0t6nueS9cATlY/">
              <li className="learn-option">History</li>
            </a>
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
