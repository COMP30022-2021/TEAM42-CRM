import React from "react";
import { useLocation } from "react-router";
import { Contact } from "./Contact";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({
  sortBy,
  setBlur,
  setLoading,
  filters,
  order,
}) {
  const urls = [
    "https://team42-crm.herokuapp.com/contact/all/" +
      localStorage.getItem("businessID") +
      "?sort=" +
      lowerCaseFirstLetter(sortBy.value),
    "https://team42-crm.herokuapp.com/customer/findall" +
      localStorage.getItem("businessID"),
    "https://team42-crm.herokuapp.com/vendor/findall" +
      localStorage.getItem("businessID"),
    "https://team42-crm.herokuapp.com/auth/findall" +
      localStorage.getItem("businessID"),
  ];

  const [contacts, setContacts] = React.useState([]);

  const contactType = useLocation().pathname.split("/")[2];
  const query = useLocation().pathname.split("/")[3];

  const handleContacts = (contacts) => {
    if (query === "all") return handleOrder(contacts);
    if (query === "filter") return handleFilter(contacts);
    else return searchContacts(contacts);
  };

  const handleOrder = (contacts) => {
    return order.label === "Ascending" ? contacts : contacts.reverse();
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
      return contacts.filter(
        (contact) => checkGender(contact) && checkPostcode(contact)
      );
    } else if (contactType === "customers") {
      return contacts.filter((contact) => customerFilters(contact));
    } else if (contactType === "employees") {
      return contacts.filter((contact) => employeeFilters(contact));
    } else if (contactType === "vendors") {
      return contacts.filter((contact) => vendorFilters(contact));
    }
    return contacts;
  };

  const customerFilters = (contact) => {
    return (
      checkGender(contact) &&
      checkAgeFrom(contact) &&
      checkAgeTo(contact) &&
      checkTo(contact.first_visit) &&
      checkFrom(contact.first_visit) &&
      checkPostcode(contact)
    );
  };

  const employeeFilters = (contact) => {
    return (
      checkGender(contact) &&
      checkAgeFrom(contact) &&
      checkTo(contact.date_joined) &&
      checkFrom(contact.date_joined) &&
      checkPostcode(contact)
    );
  };

  const vendorFilters = (contact) => {
    return checkGender(contact) && checkPostcode(contact) && checkTags(contact);
  };

  const checkGender = (contact) => {
    return (
      (contact.gender === 0 && filters.isFemale) ||
      (contact.gender === 1 && filters.isMale)
    );
  };

  const checkAgeFrom = (contact) => {
    if (filters.ageFrom === "") return true;
    var age =
      new Date().getFullYear() - parseInt(contact.birthday.split("-")[0]);
    return parseInt(filters.ageFrom) > age ? false : true;
  };

  const checkAgeTo = (contact) => {
    if (filters.ageTo === "") return true;
    var age =
      new Date().getFullYear() - parseInt(contact.birthday.split("-")[0]);
    return parseInt(filters.ageTo) < age ? false : true;
  };

  const checkTo = (contactTo) => {
    if (filters.to === "") return true;
    return filters.to < contactTo ? false : true;
  };
  const checkFrom = (contactFrom) => {
    if (filters.from === "") return true;
    return filters.from > contactFrom ? false : true;
  };

  const checkPostcode = (contact) => {
    console.log(contact);
    if (filters.postcodes.length === 0) return true;
    for (var i = 0; i < filters.postcodes.length; i++)
      if (contact.address.includes(filters.postcodes[i])) return true;

    return false;
  };

  const checkTags = (contact) => {
    if (filters.tags.length === 0) return true;
    for (var i = 0; i < filters.tags.length; i++)
      if (contact.tag.toLowerCase().includes(filters.tags[i].toLowerCase()))
        return true;

    return false;
  };

  const getURL = () => {
    if (contactType === "employees") {
      return urls[3];
    } else if (contactType === "customers") {
      return urls[1];
    } else if (contactType === "vendors") {
      return urls[2];
    }
    return urls[0];
  };

  const getContactType = () => {
    return contactType === "all" ? "contacts" : contactType;
  };

  const getRole = (contact) => {
    return contactType === "all" ? contact.role : contactType.slice(0, -1);
  };

  const loadContacts = async () => {
    setLoading(true);
    await fetch(getURL(), {
      method: "get",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setContacts(handleContacts(data[getContactType()]));
        }
      });
    setLoading(false);
  };

  const checkLoading = () => {
    if (contacts.length === 0) return false;
    if (contactType === "all") {
      return contacts[0].id !== undefined;
    } else if (contactType === "customers") {
      return contacts[0].customer_id !== undefined;
    } else if (contactType === "employees") {
      return contacts[0].employee_id !== undefined;
    } else if (contactType === "vendors") {
      return contacts[0].vendor_id !== undefined;
    }
    return false;
  };

  React.useEffect(() => {
    loadContacts();
  }, [
    sortBy,
    contactType,
    query,
    query === "filter" ? filters : null,
    query === "filter" ? JSON.stringify(filters.postcodes) : null,
    query === "filter" ? JSON.stringify(filters.tags) : null,
  ]);

  React.useEffect(() => {
    setContacts([...contacts.reverse()]);
  }, [order]);

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

      {checkLoading() ? (
        contacts.map((contact, index) => (
          <Contact key={index} contact={contact} role={getRole(contact)} />
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
