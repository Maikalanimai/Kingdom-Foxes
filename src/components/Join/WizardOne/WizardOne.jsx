import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateGenInfo } from "../../../ducks/reducers/joinReducer";
import Join from "../Join";
import Footer from '../../Footer/Footer.jsx'

function WizardOne(props) {
  const [ign, setIgn] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");
  const [gender, setGender] = useState("M");
  const [age, setAge] = useState("");


  useEffect(() => {
    setIgn(props.ign);
    setCountry(props.country);
    setTimezone(props.timezone);
    setGender(props.gender);
    setAge(props.age);
  }, [props.ign, props.country, props.timezone, props.gender, props.age]);

  const next = () => {
    if (ign !== "" && country !== "" && timezone !== "" && age !== "") {
      props.updateGenInfo(ign, country, timezone, gender, age);
      props.history.push("/join/2");
    } else {
      alert("Please fill out all the Fields");
    }
  };

  return (<>
      <Join />
    <div className='application-main'>
      <div className='application-fields'>
      <input
        className='app-input'
        type="text"
        placeholder="In Game Username"
        onChange={e => setIgn(e.target.value)}
        value={ign}
      />
      <input
      className='app-input'
        type="text"
        placeholder="Country"
        onChange={e => setCountry(e.target.value)}
        value={country}
      />
      <input
      className='app-input'
        type="text"
        placeholder="Timezone"
        onChange={e => setTimezone(e.target.value)}
        value={timezone}
      />
      <div>
      <select
        className='app-input'
        name="gender"
        onChange={e => setGender(e.target.value)}
        value={gender}
      >
        <option value = {null}>-Select a gender-</option>
        <option value="M">M</option>
        <option value="F">F</option>
      </select>
      </div>
      <input
      className='app-input'
        type="number"
        placeholder="Age"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      </div>
      <button className='next' onClick={e => next()}>Next＞＞</button>
    </div>
      <Footer/>
      </>
  );
}

const mapStateToProps = state => {
  const { ign, country, timezone, gender, age } = state;
  return { ign, country, timezone, gender, age };
};

export default connect(mapStateToProps, { updateGenInfo })(
  withRouter(WizardOne)
);
