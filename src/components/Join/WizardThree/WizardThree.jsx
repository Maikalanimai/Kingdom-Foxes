import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { updateContactInfo } from "../../../ducks/reducers/joinReducer";
import Join from "../Join";
import axios from "axios";
import Footer from '../../Footer/Footer.jsx'

function WizardThree(props) {
  const [discord, setDiscord] = useState("");
  const [forumUser, setForumUser] = useState("");
  const [mailConsent, setMailConsent] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setDiscord(props.discord);
    setForumUser(props.forumUser);
    setMailConsent(props.mailConsent);
    setEmail(props.email);
  }, [props.discord, props.forumUser, props.mailConsent, props.email]);

  const next = () => {
    if (discord !== "" && setForumUser !== "") {
      // props.updateContactInfo(discord, forumUser, mailConsent, email)
      axios.post("/api/application", {
        ign: props.ign,
        country: props.country,
        timezone: props.timezone,
        gender: props.gender,
        age: props.age,
        time_daily: props.inGameTime,
        main_class: props.mainClass,
        main_level: props.mainClassLevel,
        enjoy: props.enjoy,
        reason_to_join: props.reason,
        previous_guild_name: props.previousGuilds,
        previous_guild_leave: props.whyLeave,
        discord_user: discord,
        forum_user: forumUser,
        consent_to_email: mailConsent,
        email: email
      }).then(
        alert('Application Submited'),
        props.history.push("/about")
      )
    } else {
      alert("Please fill out your discord and wynncraft forum username");
    }
  };

  return (
    
    <>
    <Join />
    <div className='application-main'>
      <div className='application-fields'>
      <input
        className='app-input'
        placeholder="Discord tag"
        type="text"
        value={discord}
        onChange={e => {
          setDiscord(e.target.value);
        }}
      />
      <input
      className='app-input'
        placeholder="Wynncraft forum username"
        type="text"
        value={forumUser}
        onChange={e => {
          setForumUser(e.target.value);
        }}
      />
      <p>
        Would you like to recieve an email update on your application in
        addition to being contacted through discord and the wynncraft forums?
        <input
        
          type="checkbox"
          value={mailConsent}
          onChange={e => setMailConsent(!mailConsent)}
        />
      </p>
      {mailConsent ? (
        <>
          <input
          className='app-input'
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}
      </div>
      <Link className='back' to="/join/2">
        <button className='back'>＜＜Back</button>
      </Link>
      <button className='next' onClick={e => next()}>Submit＞</button>
    </div>
      <Footer/>
      </>
  );
}

const mapStateToProps = state => {
  const {
    discord,
    forumUser,
    mailConsent,
    email,
    ign,
    country,
    timezone,
    gender,
    age,
    inGameTime,
    mainClass,
    mainClassLevel,
    enjoy,
    reason,
    previousGuilds,
    whyLeave
  } = state;
  return {
    discord,
    forumUser,
    mailConsent,
    email,
    ign,
    country,
    timezone,
    gender,
    age,
    inGameTime,
    mainClass,
    mainClassLevel,
    enjoy,
    reason,
    previousGuilds,
    whyLeave
  };
};

export default connect(mapStateToProps, { updateContactInfo })(
  withRouter(WizardThree)
);
