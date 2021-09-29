import React from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    await fetch(
      "https://team42-crm.herokuapp.com/contact/" +
        localStorage.getItem("businessID"),
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
      .then((data) => setContacts(data.contacts));
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "7%",
        width: "92%",
        height: "80%",
        overflowY: "scroll",
      }}
    >
      <ContactsHeader />

      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
}
