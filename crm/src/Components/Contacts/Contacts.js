import React from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ contacts }) {
  return (
    <div style={{ position: "absolute", top: "15%", left: "7%", width: "92%" }}>
      <ContactsHeader />
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
    </div>
  );
}
