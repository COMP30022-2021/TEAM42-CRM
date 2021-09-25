import React from "react";
import Contacts from "../Components/Contacts/Contacts";
import Filters from "../Components/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import { useLocation } from "react-router";

export default function ContactPage({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const location = useLocation();
  return (
    <div>
      <div
        style={{
          filter: blur ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - Contacts</title>
        </Helmet>

        <SearchBar onClick={setBlur} />
        <Filters />
        <Contacts contacts={contacts} />
      </div>
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
    </div>
  );
}
