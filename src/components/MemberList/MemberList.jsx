import React from "react";
import Member from "./Member/Member.jsx";
import Nav from "../Nav/Nav.jsx";
import Axios from "axios";
import "./memberList.scss";
import Footer from "../Footer/Footer.jsx";
import Loader from 'react-loader-spinner'

class MemberList extends React.Component {
  constructor() {
    super();
    this.state = {
      memberList: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("/api/members").then(res => {
      this.setState({
        memberList: res.data,
        loading: false
      });
    });
  }

  render() {
    const members = this.state.memberList.map((e, i) => {
      return <Member name={e.name} rank={e.rank} joined={e.joinedFriendly} />;
    });
    const owners = members.filter(e => e.props.rank === "OWNER");
    const chiefs = members.filter(e => e.props.rank === "CHIEF");
    const captains = members.filter(e => e.props.rank === "CAPTAIN");
    const recruiters = members.filter(e => e.props.rank === "RECRUITER");
    const recruits = members.filter(e => e.props.rank === "RECRUIT");
    return (
      <div>
        <Nav />
        {this.state.loading ? (
          <Loader type="TailSpin" color="orange" height={150} width={150} />
        ) : (
          <main className="listmain">
            {owners}

            {chiefs}

            {captains}
            {recruiters}
            {recruits}
          </main>
        )}
        <Footer />
      </div>
    );
  }
}

export default MemberList;
