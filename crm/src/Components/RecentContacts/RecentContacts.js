import React from "react";

import { RecentContact } from "./RecentContact";
import { Link } from "react-router-dom";

export default function RecentContacts({ contacts }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "7%",
        width: "70%",
        height: "85%",
      }}
    >
      <div className="block" style={{ width: "80%" }}>
        <h1 style={{ marginLeft: 20, top: "12%" }}>Recent Contacts</h1>
      </div>

      {contacts.map((contact, index) => (
        <RecentContact contact={contact} />
      ))}
      {contacts.map((contact, index) => (
        <RecentContact contact={contact} />
      ))}

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: 0, bottom: 10, width: "20%", height: 50 }}
        >
          <p>Customers</p>
        </btn>
      </Link>

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: "30%", bottom: 10, width: "20%", height: 50 }}
        >
          <p>Employees</p>
        </btn>
      </Link>

      <Link to="/contacts">
        <btn
          className="button1"
          style={{ left: "60%", bottom: 10, width: "20%", height: 50 }}
        >
          <p>External Vendors</p>
        </btn>
      </Link>
    </div>
  );
}
