import React, { useState } from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

import customer from "../res/images/Customer.jpg";
import employee from "../res/images/Employee.jfif";
import vendor from "../res/images/external_vendor.jpg";

export default function Contacts() {
  // eslint-disable-next-line
  const [contacts, setContacts] = useState([
    {
      Name: "Lindsey Stroud",
      Gender: "Female",
      Role: "Employee",
      Email: "lindsey.stroud@gmail.com",
      image: employee,
    },
    {
      Name: "Nicci Troiani",
      Gender: "Female",
      Role: "Customer",
      Email: "nicci.troiani@gmail.com",
      image: customer,
    },
    {
      Name: "George Fields",
      Gender: "Male",
      Role: "External Vendor",
      Email: "george.fields@gmail.com",
      image: vendor,
    },
  ]);

  return (
    <div>
      <ContactsHeader />
      {contacts.map((contact, index) => (
        <Contact contact={contact} index={index + 1} />
      ))}
    </div>
  );
}
