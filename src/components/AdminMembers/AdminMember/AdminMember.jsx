import React, { Component } from "react";

class AdminMember extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      dateJoined: "",
      gender: "",
      region: "",
      rank: "",
      nobleClass: "",
      medals: "",
      country: "",
      admin: "",
      pm: "",
      id: "",
      edit: false
    };
  }

  componentDidMount() {
    this.setState({
      username: this.props.username,
      dateJoined: this.props.dateJoined
      .substring(0, 10)
      ,
      gender: this.props.gender,
      region: this.props.region,
      rank: this.props.rank,
      nobleClass: this.props.nobleClass,
      medals: this.props.medals,
      country: this.props.country,
      admin: this.props.admin === null ? false : this.props.admin,
      pm: this.props.pm === null ? false : this.props.pm,
      id: this.props.id
    });
  }

  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  };


  render() {
    return !this.state.edit ? (
      <div>
        <ul>
          <li>Username:{this.state.username}</li>
          <li>Date Joined: {this.state.dateJoined}</li>
          <li>Gender: {this.state.gender}</li>
          <li>Region: {this.state.region}</li>
          <li>Rank: {this.state.rank}</li>
          <li>Class: {this.state.nobleClass}</li>
          <li>Medals: {this.state.medals}</li>
          <li>Country: {this.state.country}</li>
          <button
            onClick={() =>
              this.setState({
                edit: !this.state.edit
              })
            }
          >
            Edit
          </button>
          <button onClick={() => {
            this.props.deleteMember(this.state.id, this.props.index)
          }}>Delete</button> {/* pass down as prop */}
        </ul>
      </div>
    ) : (
      <div>
        <ul>
          <li>
            Username:{" "}
            <input
              value={this.state.username}
              onChange={e => {
                this.handleChange("username", e);
              }}
            />
          </li>
          <li>
            Date Joined:{" "}
            <input
              value={this.state.dateJoined}
              onChange={e => {
                this.handleChange("dateJoined", e);
              }}
            />
          </li>
          <li>
            Gender:{" "}
            <input
              value={this.state.gender}
              onChange={e => {
                this.handleChange("gender", e);
              }}
            />
          </li>
          <li>
            Region:{" "}
            <input
              value={this.state.region}
              onChange={e => {
                this.handleChange("region", e);
              }}
            />
          </li>
          <li>
            Rank:{" "}
            <input
              value={this.state.rank}
              onChange={e => {
                this.handleChange("rank", e);
              }}
            />
          </li>
          <li>
            Noble Class:{" "}
            <input
              value={this.state.nobleClass}
              onChange={e => {
                this.handleChange("nobleClass", e);
              }}
            />
          </li>
          <li>
            Medals:{" "}
            <input
              value={this.state.medals}
              onChange={e => {
                this.handleChange("medals", e);
              }}
            />
          </li>
          <li>
            Country:{" "}
            <input
              value={this.state.country}
              onChange={e => {
                this.handleChange("country", e);
              }}
            />
          </li>
          <li>
            Is admin:{" "}
            <input
              value={this.state.admin}
              onChange={e => {
                this.handleChange("admin", e);
              }}
            />
          </li>
          <li>
            Prime Minister:{" "}
            <input
              value={this.state.pm}
              onChange={e => {
                this.handleChange("pm", e);
              }}
            />
          </li>
          <button
            onClick={() =>
              this.setState({
                edit: !this.state.edit,
                username: this.props.username,
                dateJoined: this.props.dateJoined.substring(0, 10),
                gender: this.props.gender,
                region: this.props.region,
                rank: this.props.rank,
                nobleClass: this.props.nobleClass,
                medals: this.props.medals,
                country: this.props.country
              })
            }
          >
            Cancel
          </button>
          <button
            onClick={() => {
              this.props.submitChange(
                this.state.username,
                this.state.dateJoined,
                this.state.gender,
                this.state.region,
                this.state.rank,
                this.state.nobleClass,
                this.state.medals,
                this.state.country,
                this.state.admin,
                this.state.pm,
                this.props.id
              );

              this.setState({
                edit: !this.state.edit
              });
            }}
          >
            Submit Changes
          </button>{" "}
          {/* pass down as prop */}
        </ul>
      </div>
    );
  }
}

export default AdminMember;
