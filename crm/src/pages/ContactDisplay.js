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

export default function ContactDisplay({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const location = useLocation();
  const id = parseInt(useRouteMatch().params.id);
  const contact = contacts.filter((contact) => id === contact.id)[0];

  return (
    <div>
      <div
        className="Page"
        style={{
          filter: editMode || blur ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - {contact.Name}</title>
        </Helmet>
        <ContactList contacts={contacts} />

        <SearchBar width={1240} onClick={setBlur} />
        {contact.Role === "Employee" ? (
          <EmployeeDisplay contact={contact} setEditMode={setEditMode} />
        ) : contact.Role === "Customer" ? (
          <CustomerDisplay contact={contact} setEditMode={setEditMode} />
        ) : (
          <ExternalVendorDisplay contact={contact} setEditMode={setEditMode} />
        )}
      </div>
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
