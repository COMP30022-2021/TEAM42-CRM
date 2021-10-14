import React from "react";
import { useLocation } from "react-router";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ sortBy, setBlur, setLoading, filters }) {
  const [contacts, setContacts] = React.useState([]);
  const [contactCopy, setContactCopy] = React.useState([]);

  const contactType = useLocation().pathname.split("/")[2];
  const query = useLocation().pathname.split("/")[3];

  const handleContacts = (contacts) => {
    if (query === "all") return handleAll(contacts);
    if (query === "filter") return handleFilter(contacts);
    else return searchContacts(contacts);
  };

  const handleAll = (contacts) => {
    if (contactType === "employees") {
      console.log(1);
      return contacts.filter(
        (contact) => contact.role === "employee" || contact.role === "manager"
      );
    } else if (contactType === "customers") {
      return contacts.filter((contact) => contact.role === "customer");
    } else if (contactType === "vendors") {
      return contacts.filter((contact) => contact.role === "vendor");
    }
    return contacts;
  };

  const searchContacts = (contacts) => {
    const pattern = /search=(?<searchName>\w+)@(?<email>\w+)/.exec(query);
    const regEx = new RegExp(pattern.groups.searchName, "i");
    return searchContact(regEx, contacts, pattern.groups.email);
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

  const handleFilter = (contacts) => {
    if (contactType === "all") {
      return contacts.filter((contact) => checkGender(contact));
    }
  };

  const checkGender = (contact) => {
    return (
      (contact.gender === 0 && filters.isFemale) ||
      (contact.gender === 1 && filters.isMale)
    );
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
          setContacts(handleContacts(data.contacts));
          setLoading(false);
        }
      });
  };

  React.useEffect(() => {
    loadContacts();
  }, [sortBy, contactType, query === "filter" ? filters : null]);

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
