import React from "react";
import Axios from "axios";

function Accepted(props) {
  const complete = () => {
    Axios.put(`/admin/applicationresult/${props.id}?method=false`).then(
      res => alert("Application removed from system"),
      props.removeApplicant(props.index)
      
    );
  };

  return (
    <div>
      <div>
        IGN: {props.ign}
        Discord: {props.discord_user}
        Forum Username: {props.forum_user}
        Invite Command: /guild invite {props.ign}
      </div>
      <button onClick={() => complete()}>
        Request sent in game and Applicant Contacted over discord
      </button>
    </div>
  );
}

export default Accepted;
