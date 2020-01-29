import React from "react";
import Axios from "axios";
import Application from "./Application.jsx";
import Accepted from "./Accepted.jsx";
import './applications.css'

class AdminApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      applicants: [],
      accepted: [],
    };
  }

  componentDidMount() {
    Axios.get("/admin/applications").then(res => {
      // console.log(res);
      this.setState({
        applicants: res.data[0],
        accepted: res.data[1]
      });
    });
  }


  componentDidUpdate(oldProps, oldState) {
    oldState !== this.state ? console.log("update") : console.log("no update");
  }

  removeApplicant = index => {
    let arr = [...this.state.applicants]
    arr.splice(index,1)
    this.setState({
      applicants: arr
    })
    Axios.get("/admin/applications").then(res => {
      // console.log(res);
      this.setState({
        applicants: res.data[0],
        accepted: res.data[1]
      });
    })
  };

  removeAccepted= index => {
    
    let arr = [...this.state.accepted]
    arr.splice(index,1)
    this.setState({
      accepted: arr
    })
    // console.log('removeAccepted fired')
  }

  render() {
    return (
      <div>
          <h1>Current Applicants</h1>
        <div className='all-apps'>
          <div className="unhandled">
            {this.state.applicants.map((e, i) => {
              return (
                <Application
                  removeApplicant={this.removeApplicant}
                  index={i}
                  id={e.id}
                  ign={e.ign}
                  age={e.age}
                  main_class={e.main_class}
                  main_level={e.main_level}
                  gender={e.gender}
                  previous_guild_name={e.previous_guild_name}
                  previous_guild_leave={e.previous_guild_leave}
                  country={e.country}
                  discord_user={e.discord_user}
                  time_daily={e.time_daily}
                  timezone={e.timezone}
                  reason_to_join={e.reason_to_join}
                  enjoy={e.enjoy}
                  forum_user={e.forum_user}
                  consent_to_email={e.consent_to_email}
                  email={e.email}
                />
              );
            })}
          </div>
          <div className="handled">
            {this.state.accepted.map((e, i) => {
              return (
                <Accepted
                  removeApplicant={this.removeAccepted}
                  index={i}
                  id={e.id}
                  ign={e.ign}
                  discord_user={e.discord_user}
                  forum_user={e.forum_user}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminApplication;
