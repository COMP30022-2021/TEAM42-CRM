import React from "react";

import { RecentContact } from "./RecentContact";
import { Link } from "react-router-dom";

export default function RecentContacts({ contacts }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "7%",
          width: "60%",
          height: "85%",
        }}
      >
        <div className="block">
          <h1 style={{ marginLeft: 20, top: "12%", position: "absolute" }}>
            Recent Contacts
          </h1>
        </div>

        {contacts.map((contact) => (
          <RecentContact contact={contact} />
        ))}
        {contacts.map((contact) => (
          <RecentContact contact={contact} />
        ))}

        <Link to="/contacts">
          <div className="button4" style={{ left: "0%", bottom: 10 }}>
            <p>Customers</p>
          </div>
        </Link>

        <Link to="/contacts">
          <div className="button1" style={{ left: "30%", bottom: 10 }}>
            <p>Employees</p>
          </div>
        </Link>

        <Link to="/contacts">
          <div className="button1" style={{ left: "55%", bottom: 10 }}>
            <p>External Vendors</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
