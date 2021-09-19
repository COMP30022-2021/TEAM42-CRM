import React from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ contacts }) {
  return (
    <div>
      <ContactsHeader />
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
    </div>
  );
}
