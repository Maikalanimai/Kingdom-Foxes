import React from "react";
import Member from "./Member/Member.jsx";
import Nav from "../Nav/Nav.jsx";
import Axios from "axios";

class MemberList extends React.Component {
  constructor() {
    super();
    this.state = {
      memberList: []
    };
  }

  componentDidMount() {
    Axios.get("/api/members").then(res => {
      this.setState({
        memberList: res.data
      });
    });
  }


  render() {
    const members = this.state.memberList.map((e, i) => {
      return <Member name={e.name} rank={e.rank} joined={e.joinedFriendly} />;
    });
    const owners = members.filter(e => e.props.rank === 'OWNER')
    const chiefs = members.filter(e => e.props.rank === 'CHIEF')
    const captains = members.filter(e => e.props.rank === 'CAPTAIN')
    const recruiters = members.filter(e => e.props.rank ==='RECRUITER')
    const recruits = members.filter(e => e.props.rank ==='RECRUIT')
    console.log(this.state.memberList);
    return (
      <div>
        <Nav />
        {owners}
        {chiefs}
        {captains}
        {recruiters}
        {recruits}
      </div>
    );
  }
}

export default MemberList;
