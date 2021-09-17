import React, { useState } from "react";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";
import { RecentContact } from "./RecentContact";
import { Link } from "react-router-dom";

export default function RecentContacts() {
  // eslint-disable-next-line
  const [contacts, setContacts] = useState([
    {
      Name: "Lindsey Stroud",
      Role: "Employee",
      Email: "lindsey.stroud@gmail.com",
      image: employee,
    },
    {
      Name: "Nicci Troiani",
      Role: "Customer",
      Email: "nicci.troiani@gmail.com",
      image: customer,
    },
    {
      Name: "George Fields",
      Role: "External Vendor",
      Email: "george.fields@gmail.com",
      image: vendor,
    },
  ]);

  return (
    <div>
      <div className="block" style={{ width: 750, left: 103, top: 120 }}>
        <h1 style={{ marginLeft: 20 }}>Recent Contacts</h1>
      </div>

      {contacts.map((contact, index) => (
        <RecentContact contact={contact} index={index + 1} />
      ))}

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: 103, bottom: 10, width: 200, height: 50 }}
        >
          <p>Customers</p>
        </btn>
      </Link>

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: 353, bottom: 10, width: 200, height: 50 }}
        >
          <p>Employees</p>
        </btn>
      </Link>

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: 603, bottom: 10, width: 200, height: 50 }}
        >
          <p>External Vendors</p>
        </btn>
      </Link>
    </div>
  );
}
