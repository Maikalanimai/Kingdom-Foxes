import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { updateGameInfo } from "../../../ducks/reducers/joinReducer";
import Join from "../Join";
import Footer from '../../Footer/Footer.jsx'

function WizardTwo(props) {
  const [inGameTime, setInGameTime] = useState("");
  const [mainClass, setMainClass] = useState("");
  const [mainClassLevel, setMainClassLevel] = useState("Warrior");
  const [enjoy, setEnjoy] = useState("");
  const [reason, setReason] = useState("");
  const [togglePrevious, setTogglePrevious] = useState(false);
  const [previousGuilds, setPreviousGuilds] = useState("");
  const [whyLeave, setWhyLeave] = useState("");

  

  useEffect(() => {
    setInGameTime(props.inGameTime);
    setMainClass(props.mainClass);
    setMainClassLevel(props.mainClassLevel);
    setEnjoy(props.enjoy);
    setReason(props.reason);
    setPreviousGuilds(props.previousGuilds);
    setWhyLeave(props.whyLeave);
  }, [
    props.inGameTime,
    props.mainClass,
    props.mainClassLevel,
    props.enjoy,
    props.reason,
    props.previousGuilds,
    props.whyLeave
  ]);

  const next = () => {
    if (
      inGameTime !== "" &&
      mainClassLevel !== "" &&
      enjoy !== "" &&
      reason !== ""
    ) {
      props.updateGameInfo(
        inGameTime,
        mainClass,
        mainClassLevel,
        enjoy,
        reason,
        previousGuilds,
        whyLeave
      );
      props.history.push("/join/3");
    } else {
      alert("Please fill out all the Fields");
    }
  };

  return (
    <div>
      <Join />
      Hours per week in game
      <input
        type="number"
        value={inGameTime}
        onChange={e => {
          setInGameTime(e.target.value);
        }}
      />
      <p>Main Class</p>
      <select value={mainClass} onChange={e => setMainClass(e.target.value)}>
        <option value={null}>--Select a Class--</option>
        <option value="Warrior">Warrior</option>
        <option value="Assassin">Assassin</option>
        <option value="Archer">Archer</option>
        <option value="Shaman">Shaman</option>
        <option value="Mage">Mage</option>
      </select>
      <p>Main Class Level</p>
      <input
        type="number"
        value={mainClassLevel}
        onChange={e => setMainClassLevel(e.target.value)}
      />
      <textarea
        placeholder="What do you enjoy in game?"
        type="text"
        value={enjoy}
        onChange={e => setEnjoy(e.target.value)}
      />
      <textarea
        placeholder="Why do you want to join Kingdom of Foxes?"
        type="text"
        value={reason}
        onChange={e => setReason(e.target.value)}
      />
      <p>
        Have you been in a previous guild?
        <input
          type="checkbox"
          value={togglePrevious}
          onChange={e => setTogglePrevious(!togglePrevious)}
        />
      </p>
      {togglePrevious ? (
        <>
          <input
            type="text"
            placeholder="Previous guilds"
            value={previousGuilds}
            onChange={e => setPreviousGuilds(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Reason for leaving guilds listed"
            value={whyLeave}
            onChange={e => setWhyLeave(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}
      <Link to="/join/1">
        <button>Back</button>
      </Link>
      <button onClick={e => next()}>Next</button>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  const {
    inGameTime,
    mainClass,
    mainClassLevel,
    enjoy,
    reason,
    previousGuilds,
    whyLeave
  } = state;
  return {
    inGameTime,
    mainClass,
    mainClassLevel,
    enjoy,
    reason,
    previousGuilds,
    whyLeave
  };
};

export default connect(mapStateToProps, { updateGameInfo })(
  withRouter(WizardTwo)
);
