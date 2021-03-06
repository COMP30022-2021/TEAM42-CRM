import React from "react";
import { RecentContact } from "./RecentContact";
import { Link } from "react-router-dom";

export default function RecentContacts({ setLoading }) {
  const [contacts, setContacts] = React.useState([]);

  const loadContacts = async () => {
    await fetch(
      "https://team42-crm.herokuapp.com/contact/recent/" +
        localStorage.getItem("businessID"),
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setContacts(data.data);
          setLoading(false);
        }
      });
  };

  React.useEffect(() => {
    loadContacts();
  });

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

        {contacts.slice(0, 8).map((contact, index) => (
          <RecentContact contact={contact} key={index} />
        ))}

        <Link to="/contacts/customers/all">
          <div className="button4" style={{ left: "0%", bottom: "4%" }}>
            <p
              style={{
                position: "relative",
                fontSize: 16,
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Customers
            </p>
          </div>
        </Link>

        <Link to="/contacts/employees/all">
          <div className="button4" style={{ left: "39%", bottom: "4%" }}>
            <p
              style={{
                position: "relative",
                fontSize: 16,
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Employees
            </p>
          </div>
        </Link>

        <Link to="/contacts/vendors/all">
          <div className="button4" style={{ left: "78%", bottom: "4%" }}>
            <p
              style={{
                position: "relative",
                fontSize: 16,
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              External Vendors
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
