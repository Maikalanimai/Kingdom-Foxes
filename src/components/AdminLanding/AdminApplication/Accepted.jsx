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
    <div className='accepted'>

        <p>IGN: {props.ign}</p>
        <p>Discord: {props.discord_user}</p>
        <p>Forum Username: {props.forum_user}</p>
        <p>Invite Command: /guild invite {props.ign}</p>
      
      <button className='finalize' onClick={() => complete()}>
        Request sent in game and Applicant Contacted over discord
      </button>
    </div>
  );
}

export default Accepted;
