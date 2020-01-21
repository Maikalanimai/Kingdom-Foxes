import React, {useState, useEffect} from "react";
import "./member.scss";
import Axios from "axios";

function Member(props) {
  const [stats, setStats] = useState('')
  const [displayStats, setDisplayStats] = useState(false)



  const getPlayerData = () => {
    Axios.get(`/api/member/${props.name}`).then(res => {
      console.log(res.data)
      setStats(res.data)
    });
  };

  useEffect(() =>{
    console.log(displayStats)
  }, [displayStats]
  )

  return (
    <div className="member" onClick={() => {
      setDisplayStats(!displayStats)
      !displayStats ? getPlayerData() : console.log('null')
      }}>
      <h2>{props.name}</h2>
      <h3>{props.rank}</h3>
      <h3>{props.joined}</h3>
      {displayStats ? <div>
      {stats.rank !== 'Player'? <h3>{stats.rank}</h3>: <></>}
<div>Chests found: {stats.chests_found}</div>
<div>Kilometers traveled: {stats.steps_taken/1000}</div>
<div>Mobs killed: {stats.mobs_killed}</div>
<div>Combined Class Levels: {stats.combined_level}</div>
      </div>: <></>}
    </div>
  );
}

export default Member;
