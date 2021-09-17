import React from "react";
import Contacts from "../Components/Contacts/Contacts";
import Filters from "../Components/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";

export default function ContactPage() {
  const [sbc, setSBC] = React.useState(true);
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <SearchBar />
      <Filters />
      <Contacts />
      {sbc ? <SideBarCollapsed setSBC={setSBC} /> : <SideBar setSBC={setSBC} />}
    </div>
  );
}
