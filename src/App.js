import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";

const contactList = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1629976002376-3bccae77037d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Dipesh Shrestha",
    email: "dipesh@gmail.com",
    mobile: "9999999999",
    address: "Milanchowk, Butwal - 32907",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1629976002376-3bccae77037d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Bibek Shrestha",
    email: "bibek@gmail.com",
    mobile: "8888888888",
    address: "Milanchowk, Butwal - 32907",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1629976002376-3bccae77037d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Rico Shrestha",
    email: "rico@gmail.com",
    mobile: "7777777777",
    address: "Milanchowk, Butwal - 32907",
  },
];

function App(props) {
  const [contacts, setContacts] = useState(contactList);
  const [nextId, setNextId] = useState(4);

  const addNewContact = (newContact) => {
    // console.log("App.js" +newContact.name)
    newContact = { ...newContact, id: nextId };
    // console.log(newContact.id)
    setNextId(nextId + 1);
    const updatedContacts = contacts;
    updatedContacts.push(newContact);

    setContacts(updatedContacts);
    console.log(props);
  };
  return (
    <>
      <Router>
        {/* Switch component helps to select the First match route */}
        <Switch>
          {/* "exact" attribute will help to match the exact match */}
          <Route path="/" exact component={Home} />
          <Route
            path="/contacts"
            render={(props) => {
              return <Contacts {...props} contacts={contacts} />;
            }}
          />

          <Route
            path="/add-contact"
            exact
            render={(props) => (
              <AddContact {...props} onAddingNewContact={addNewContact} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
