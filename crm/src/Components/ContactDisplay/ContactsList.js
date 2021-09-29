import React from "react";
import ContactsListElement from "./ContactsListElement";

export default function ContactList({ contacts }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "5.6%",
        width: "14%",
        height: "85%",
        overflowY: "scroll",
      }}
    >
      <div className="block" style={{ position: "sticky", zIndex: 1 }}>
        <h4 style={{ left: "20%", top: "12%" }}>Name</h4>
      </div>
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ContactsListElement contact={contact} />
      ))}
    </div>
  );
}
