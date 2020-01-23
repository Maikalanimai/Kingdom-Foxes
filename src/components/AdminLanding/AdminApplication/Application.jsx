import React, { useState } from "react";
import Axios from "axios";



function Application(props) {
  const [appStatus, setAppStatus] = useState("");


  const confirm = () => {
    Axios.put(`/admin/applicationresult/${props.id}?method=${appStatus}`).then(
      res => {
        alert(res.data);
        props.removeApplicant(props.index)
        // window.location.reload()
      }
    );
  };

  return (
    <div>
      <ul>
        <li>IGN: {props.ign}</li>
        <li>Age: {props.age}</li>
        <li>Main Class: {props.main_class}</li>
        <li>Level: {props.main_level}</li>
        <li>Gender: {props.gender}</li>
        <li>Previous Guilds: {props.previous_guild_name}</li>
        <li>Reason for leaving Previous Guild: {props.previous_guild_leave}</li>
        <li>Country: {props.country}</li>
        <li>Discord: {props.discord_user}</li>
        <li>Weekly hours in game: {props.time_daily}</li>
        <li>Timezone: {props.timezone}</li>
        <li>Reason to join: {props.reason_to_join}</li>
        <li>What is enjoyable in wynn: {props.enjoy}</li>
        <li>Forum username: {props.forum_user}</li>
        <li>Consent to Email: {props.consent_to_email}</li>
        {props.consent_to_email === "true" ? (
          <li>Email: {props.email}</li>
        ) : (
          <></>
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
