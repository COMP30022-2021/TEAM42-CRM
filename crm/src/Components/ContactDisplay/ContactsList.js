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
      }}
    >
      <div className="block">
        <h4 style={{ left: "5%" }}>Name</h4>
      </div>
      {contacts.map((contact, index) => (
        <ContactsListElement contact={contact} index={index + 1} />
      ))}
    </div>
  );
}
