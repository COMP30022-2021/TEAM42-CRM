import React from "react";
import ContactsListElement from "./ContactsListElement";

import { useHistory } from "react-router";

export default function ContactList() {
  const [contacts, setContacts] = React.useState([]);
  const history = useHistory().pathname;

  const loadContacts = async () => {
    await fetch(
      "https://team42-crm.herokuapp.com/contact/all/" +
        localStorage.getItem("businessID") +
        "?sort=name",
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setContacts(data.contacts);
        }
      });
  };

  React.useEffect(() => {
    loadContacts();
  }, [history]);

  return (
    <div className="contactList">
      <div className="block" style={{ position: "sticky", zIndex: 1, top: 0 }}>
        <h4 style={{ left: "20%", top: "12%" }}>Name</h4>
      </div>
      {contacts.map((contact, index) => (
        <ContactsListElement contact={contact} key={index} />
      ))}
    </div>
  );
}
