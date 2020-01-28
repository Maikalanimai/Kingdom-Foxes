import React from "react";

function Anouncement(props) {
  return (
    <>
      <h2 className='anouncement-poster'>
        {props.rank} {props.poster}
      {props.isAdmin ? (
        <button className='anouncement-delete' onClick={() => props.deleteAnouncement(props.id)}>
          Delete Anouncement
        </button>
      ) : (
        <></>
      )}

      </h2>
      <p className='anouncement-content'>{props.content}</p>
    </>
  );
}

export default Anouncement;
