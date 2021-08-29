import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   contacts: contactList,
    // };
  }
  render() {
    return (
      <div
        style={{ height: "100vh", width: "100%" }}
      >
        <h1 style={{ textAlign: "center" }}>Home Section</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/contacts">
            <button
              style={{ margin: "15px" }}
              className="ui button blue center"
            >
              View all Contacts
            </button>
          </Link>
          <Link to="/add-contact">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </div>
      </div>
    );
  }
}
