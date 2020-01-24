import React from "react";

function Anouncement(props) {
  return (
    <div className="anouncement">
      <h2>
        {props.rank} {props.poster}
      </h2>
      <p>{props.content}</p>
      {props.isAdmin ? (
        <button onClick={() => props.deleteAnouncement(props.id)}>
          Delete Anouncement
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Anouncement;
