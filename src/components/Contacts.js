import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function Contacts(props) {
  console.log(props.contact);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Contact Section</h1>
      <nav style={{ textAlign: "right", marginRight: "10px" }}>
        <Link to="/">Home / </Link>
        <Link to="/add-contact">Add Contact</Link>
      </nav>
      <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
        <div
          style={{
            marginTop: '30px'
          }}
        >
          {props.contacts.map((contact) => {
            return <ContactCard key={contact.id} {...contact} />;
          })}
        </div>
      </div>
    </div>
  );
}
