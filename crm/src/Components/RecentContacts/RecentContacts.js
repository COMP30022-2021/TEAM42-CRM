import React from "react";

import { RecentContact } from "./RecentContact";
import { Link } from "react-router-dom";

export default function RecentContacts({ contacts }) {
  // eslint-disable-next-line
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
