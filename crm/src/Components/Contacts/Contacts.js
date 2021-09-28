import React from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ contacts }) {
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
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
}
