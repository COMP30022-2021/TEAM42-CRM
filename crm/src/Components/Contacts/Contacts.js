import React from "react";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({ sortBy, setBlur }) {
  const [contacts, setContacts] = React.useState([]);

  const loadContacts = async () => {
    console.log(
      "https://team42-crm.herokuapp.com/contact/" +
        localStorage.getItem("businessID") +
        "?sort=" +
        lowerCaseFirstLetter(sortBy.value)
    );
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
          setContacts(data.contacts);
        }
      });
  };

  React.useEffect(() => {
    loadContacts();
  }, [sortBy]);

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
