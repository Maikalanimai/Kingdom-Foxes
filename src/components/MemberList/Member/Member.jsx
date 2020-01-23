import React, { useState } from "react";
import "./member.scss";
import Axios from "axios";
import Loader from "react-loader-spinner";

function Member(props) {
  const [stats, setStats] = useState("");
  const [displayStats, setDisplayStats] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPlayerData = () => {
    Axios.get(`/api/member/${props.name}`).then(res => {
      setStats(res.data);
      setLoading(false);
    });
  };

  return (
    <div
      className={`${props.rank} member`}
      onClick={() => {
        setDisplayStats(!displayStats);
        !displayStats ? getPlayerData() : console.log("null");
      }}
    >
      <h2 className="pad">{props.name}</h2>
      <h3 className="pad">{props.rank}</h3>
      <h3 className="pad">Joined on: {props.joined}</h3>
      {displayStats ? (
        <div>
          {loading ? (
            <Loader type="Bars" color="orange" height={70} width={70} />
          ) : (
            <>
              {stats.rank !== "Player" ? <h3>{stats.rank}</h3> : <></>}
              <div>Chests found: {stats.chests_found}</div>
              <div>Kilometers traveled: {stats.steps_taken / 1000}</div>
              <div>Mobs killed: {stats.mobs_killed}</div>
              <div>Combined Class Levels: {stats.combined_level}</div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Member;
