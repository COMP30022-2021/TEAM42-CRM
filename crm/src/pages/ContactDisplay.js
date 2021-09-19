import React from "react";
import SideBarCollapsed from "../Components/SideBar/SBC";
import { SideBar } from "../Components/SideBar/SideBar";
import { useLocation, useRouteMatch } from "react-router";
import SearchBar from "../Components/SearchBar";
import ContactList from "../Components/ContactDisplay/ContactsList";

import CustomerDisplay from "../Components/ContactDisplay/CustomerDisplay";
import ExternalVendorDisplay from "../Components/ContactDisplay/ExternalVendorDisplay";
import EmployeeDisplay from "../Components/ContactDisplay/EmployeeDisplay";

export default function ContactDisplay({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const location = useLocation();
  const id = parseInt(useRouteMatch().params.id);
  const contact = contacts.filter((contact) => id === contact.id)[0];

  return (
    <div>
      <SearchBar width={1232} />
      {contact.Role === "Employee" ? (
        <EmployeeDisplay contact={contact} />
      ) : contact.Role === "Customer" ? (
        <CustomerDisplay contact={contact} />
      ) : (
        <ExternalVendorDisplay contact={contact} />
      )}

      <ContactList contacts={contacts} />
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
    </div>
  );
}
