import React from "react";
import ContactsListElement from "./ContactsListElement";

export default function ContactList({ contacts }) {
  return (
    <div>
      <div className="block" style={{ width: "14%", left: "5.6%", top: "10%" }}>
        <h4 style={{ left: "5%" }}>Name</h4>
      </div>
      {contacts.map((contact, index) => (
        <ContactsListElement contact={contact} index={index + 1} />
      ))}
    </div>
  );
}
