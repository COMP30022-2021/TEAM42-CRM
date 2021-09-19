import React from "react";
import EmployeeDisplay from "../Components/ContactDisplay/EmployeeDisplay";
import SideBarCollapsed from "../Components/SideBar/SBC";
import { SideBar } from "../Components/SideBar/SideBar";
import { useLocation } from "react-router";
import SearchBar from "../Components/SearchBar";
import ContactList from "../Components/ContactDisplay/ContactsList";
import CustomerDisplay from "../Components/ContactDisplay/CustomerDisplay";

export default function ContactDisplay() {
  const [sbc, setSBC] = React.useState(true);
  const location = useLocation();

  return (
    <div>
      <SearchBar width={1232} />
      <CustomerDisplay />
      <ContactList />
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
    </div>
  );
}
