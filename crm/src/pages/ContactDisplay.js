import React from "react";
import Helmet from "react-helmet";
import { useLocation, useRouteMatch } from "react-router";

import SideBarCollapsed from "../Components/SideBar/SBC";
import { SideBar } from "../Components/SideBar/SideBar";
import SearchBar from "../Components/SearchBar";
import ContactList from "../Components/ContactDisplay/ContactsList";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import CustomerDisplay from "../Components/ContactDisplay/CustomerDisplay";
import ExternalVendorDisplay from "../Components/ContactDisplay/ExternalVendorDisplay";
import EmployeeDisplay from "../Components/ContactDisplay/EmployeeDisplay";
import UpdateContact from "../Components/UpdateContacts/UpdateContact";

export default function ContactDisplay() {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const location = useLocation();
  const id = parseInt(useRouteMatch().params.id);

  const [contact, setContact] = React.useState(null);

  React.useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    const path = location.pathname.split("/");
    console.log(
      "https://team42-crm.herokuapp.com/contact/single?role=" +
        lowerCaseFirstLetter(path[2]) +
        "&id=" +
        path[4]
    );
    await fetch(
      "https://team42-crm.herokuapp.com/contact/single?role=" +
        lowerCaseFirstLetter(path[2]) +
        "&id=" +
        path[4],
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
        console.log(data.contact[0]);
        if (data.status_code === 200) {
          console.log("hi");
          setContact(data);
          console.log(contact);
        }
      });
  };

  return (
    <div>
      {contact === null ? (
        <div>Loading</div>
      ) : (
        <div
          className="Page"
          style={{
            filter: editMode || blur ? "blur(2px)" : "",
          }}
        >
          {/* <Helmet>
          <title>Lynk - {contact.Name}</title>
        </Helmet> */}

          {/* <ContactList contacts={contact} /> */}
          <SearchBar width="95%" onClick={setBlur} />

          {contact[0] !== undefined &&
            (contact.role === "Employee" || contact.Role === "Manager" ? (
              <EmployeeDisplay contact={contact} setEditMode={setEditMode} />
            ) : contact.role === "Customer" ? (
              <CustomerDisplay contact={contact} setEditMode={setEditMode} />
            ) : (
              <ExternalVendorDisplay
                contact={contact}
                setEditMode={setEditMode}
              />
            ))}
        </div>
      )}
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {editMode && (
        <UpdateContact setEditMode={setEditMode} contact={contact} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
    </div>
  );
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
