import React from "react";
import Contacts from "../Components/Contacts/Contacts";
import Filters from "../Components/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";

import { useLocation } from "react-router";

export default function ContactPage(props) {
  const [sbc, setSBC] = React.useState(true);
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <SearchBar />
      <Filters />
      <Contacts />
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
    </div>
  );
}
