import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { updateGameInfo } from "../../../ducks/reducers/joinReducer";
import Join from "../Join";
import Footer from "../../Footer/Footer.jsx";

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
    <>
      <Join />
      <div className="application-main">
        <div className="application-fields">
          <input
            className="app-input"
            placeholder="Hours Per Week in Game"
            type="number"
            value={inGameTime}
            onChange={e => {
              setInGameTime(e.target.value);
            }}
          />

          <select
            className="app-input"
            value={mainClass}
            onChange={e => setMainClass(e.target.value)}
          >
            <option value={null}>--Select Your Main Class--</option>
            <option value="Warrior">Warrior</option>
            <option value="Assassin">Assassin</option>
            <option value="Archer">Archer</option>
            <option value="Shaman">Shaman</option>
            <option value="Mage">Mage</option>
          </select>
          <input
            className='app-input'
            placeholder="Main Class Level"
            type="number"
            value={mainClassLevel}
            onChange={e => setMainClassLevel(e.target.value)}
          />
          <textarea
            className='app-textinput'
            placeholder="What do you enjoy in game?"
            type="text"
            value={enjoy}
            onChange={e => setEnjoy(e.target.value)}
          />
          <textarea
          className='app-textinput'
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
                className='app-input'
                type="text"
                placeholder="Previous guilds"
                value={previousGuilds}
                onChange={e => setPreviousGuilds(e.target.value)}
              />
              <textarea
                className='app-textinput'
                type="text"
                placeholder="Reason for leaving guilds listed"
                value={whyLeave}
                onChange={e => setWhyLeave(e.target.value)}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <Link className='back' to="/join/1">
          <button className='back'>＜＜Back</button>
        </Link>
        <button className="next" onClick={e => next()}>
          Next＞＞
        </button>
      </div>
      <Footer />
    </>
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
