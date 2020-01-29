import React, { useState } from "react";
import Axios from "axios";

function Application(props) {
  const [appStatus, setAppStatus] = useState("");

  const confirm = () => {
    Axios.put(`/admin/applicationresult/${props.id}?method=${appStatus}`).then(
      res => {       
        alert(res.data);
        props.removeApplicant(props.index);
        setAppStatus(false)
      }
    );
  };

  return (
    <div className="admin-application">
      <ul className="admin-application-items">
        <li className="application-item">IGN: {props.ign}</li>
        <li className="application-item">Age: {props.age}</li>
        <li className="application-item">Main Class: {props.main_class}</li>
        <li className="application-item">Level: {props.main_level}</li>
        <li className="application-item">Gender: {props.gender}</li>
        <li className="application-item">
          Previous Guilds: {props.previous_guild_name}
        </li>
        <li className="application-item large">
          Reason for leaving Previous Guild: {props.previous_guild_leave}
        </li>
        <li className="application-item">Country: {props.country}</li>
        <li className="application-item">Discord: {props.discord_user}</li>
        <li className="application-item">
          Weekly hours in game: {props.time_daily}
        </li>
        <li className="application-item">Timezone: {props.timezone}</li>
        <li className="application-item large">
          Reason to join: {props.reason_to_join}
        </li>
        <li className="application-item large">
          What is enjoyable in wynn: {props.enjoy}
        </li>
        <li className="application-item">Forum username: {props.forum_user}</li>
        {props.consent_to_email === "true" ? (
          <li className="application-item">Email: {props.email}</li>
        ) : (
          <li className="application-item">
            Consent to Email: {props.consent_to_email}
          </li>
        )}
      </ul>
      {appStatus === "" ? (
        <button onClick={() => setAppStatus(false)}>Deny</button>
      ) : (
        <></>
      )}
      {appStatus !== "" ? (
        <button onClick={() => setAppStatus("")}>Go Back</button>
      ) : (
        <></>
      )}
      {appStatus !== "" ? (
        <button onClick={() => confirm()}>Confirm</button>
      ) : (
        <></>
      )}
      {appStatus === "" ? (
        <button onClick={() => setAppStatus(true)}>Accept</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Application;
