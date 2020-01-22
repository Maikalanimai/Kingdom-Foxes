import React from "react";
import Axios from "axios";
import Application from "./Application.jsx";
import Accepted from "./Accepted.jsx";

class AdminApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      applicants: [],
      accepted: []
    };
  }

  componentDidMount() {
    Axios.get("/admin/applications").then(res => {
      console.log(res);
      this.setState({
        applicants: res.data[0],
        accepted: res.data[1]
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Current Applicants</h1>
          {this.state.applicants.map((e, i) => {
            return (
              <Application
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
          {this.state.accepted.map(e => {
            return (
              <Accepted
                id={e.id}
                ign={e.ign}
                discord_user={e.discord_user}
                forum_user={e.forum_user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AdminApplication;
