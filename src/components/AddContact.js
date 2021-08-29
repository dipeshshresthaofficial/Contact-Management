import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddContact(props) {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    image: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(props.onAddingNewContact);
    props.onAddingNewContact(newContact);
    // console.log(props)

    //Programatically calling the ROUTES. This "history" prop is obtained from Route
    props.history.push("/contacts");
  };

  const handleChange = (e) => {
    if (e.target.name === "contact-name") {
      setNewContact({
        ...newContact,
        name: e.target.value,
      });
    }
    if (e.target.name === "contact-email") {
      setNewContact({
        ...newContact,
        email: e.target.value,
      });
    }
    if (e.target.name === "contact-mobile") {
      setNewContact({
        ...newContact,
        mobile: e.target.value,
      });
    }
    if (e.target.name === "contact-address") {
      setNewContact({
        ...newContact,
        address: e.target.value,
      });
    }
    if (e.target.name === "contact-image") {
      setNewContact({
        ...newContact,
        image: e.target.value,
      });
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Contact Section</h1>
      <nav style={{textAlign: 'right', marginRight:'10px'}}>
        <Link to="/">Home / </Link>
        <Link to="/contacts">View Contacts</Link>
      </nav>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="ui form"
      >
        <input
          style={styles.inputField}
          className="field"
          placeholder="Name"
          onChange={handleChange}
          name="contact-name"
          value={newContact.name}
        />
        <input
          style={styles.inputField}
          className="field"
          placeholder="Email"
          onChange={handleChange}
          name="contact-email"
          value={newContact.email}
        />
        <input
          style={styles.inputField}
          className="field"
          placeholder="Mobile No"
          onChange={handleChange}
          name="contact-mobile"
          value={newContact.mobile}
        />
        <input
          style={styles.inputField}
          className="field"
          placeholder="Address"
          onChange={handleChange}
          name="contact-address"
          value={newContact.address}
        />
        <input
          style={styles.inputField}
          className="field"
          placeholder="Image Url"
          onChange={handleChange}
          name="contact-image"
          value={newContact.image}
        />
        <button
          type="submit"
          onClick={handleClick}
          className="ui button blue center"
          style={styles.btn}
        >
          Add
        </button>
      </form>
    </div>
  );
}

const styles = {
  inputField: {
    margin: "5px",
    width: "50%",
  },
  btn: {
    margin: "5px",
    width: "50%",
  },
};
