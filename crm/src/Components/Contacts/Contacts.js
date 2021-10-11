import React from "react";
import { useLocation } from "react-router";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ sortBy, setBlur, setLoading }) {
  const [contacts, setContacts] = React.useState([]);

  const filter = useLocation().pathname.split("/")[2];
  const search = /search=/.test(filter);

  const filterContact = (contacts) => {
    if (filter === "all") return contacts;
    else if (filter === "employees") {
      console.log(1);
      return contacts.filter(
        (contact) => contact.role === "employee" || contact.role === "manager"
      );
    } else if (filter === "customers") {
      return contacts.filter((contact) => contact.role === "customer");
    } else if (filter === "vendors") {
      return contacts.filter((contact) => contact.role === "vendor");
    } else if (search) {
      const pattern = /search=(?<searchName>\w+)@(?<email>\w+)/.exec(filter);
      const regEx = new RegExp(pattern.groups.searchName, "i");
      return searchContact(regEx, contacts, pattern.groups.email);
    } else return contacts;
  };

  const searchContact = (regEx, contacts, on) => {
    if (on === "Name") {
      return contacts.filter((contact) => regEx.test(contact.name));
    } else if (on === "Email") {
      return contacts.filter((contact) => regEx.test(contact.email));
    } else {
      return contacts.filter((contact) => regEx.test(contact.phone));
    }
  };
  const loadContacts = async () => {
    setLoading(true);
    await fetch(
      "https://team42-crm.herokuapp.com/contact/all/" +
        localStorage.getItem("businessID") +
        "?sort=" +
        lowerCaseFirstLetter(sortBy.value),
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
          setContacts(filterContact(data.contacts));
          setLoading(false);
        }
      });
  };

  React.useEffect(() => {
    loadContacts();
  }, [sortBy, filter]);

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "7%",
        width: "92%",
        height: "80%",
        overflowY: "scroll",
      }}
    >
      <ContactsHeader />

      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))
      ) : (
        <div className="noContacts">
          <p className="noContactsText">No contacts to show.&nbsp;</p>
          <p
            className="noContactsText"
            style={{ color: "#0075ff", textDecoration: "underline" }}
            onClick={() => setBlur(true)}
          >
            Click here
          </p>
          <p className="noContactsText">&nbsp;to add a new contact.</p>
        </div>
      )}
    </div>
  );
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
