import React from "react";
import { Link } from "react-router-dom";

export default function ContactDetail(props) {
  console.log(props);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Contact Detail Section</h1>
      <nav style={{ textAlign: "right", marginRight: "10px" }}>
        <Link to="/">Home / </Link>
        <Link to="/contacts">View Contacts</Link>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <img
            src={props.location.state.image}
            alt={props.location.state.name}
            height={200}
            width={200}
            style={{ objectFit: "cover" , borderRadius: '5px'}}
          />
        </div>
        <div style={{ width: "200px" }}>
          <p>Name: {props.location.state.name}</p>
          <p>Email: {props.location.state.email}</p>
          <p>Mobile: {props.location.state.mobile}</p>
          <p>Address: {props.location.state.address}</p>
        </div>
      </div>
    </div>
  );
}
