import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts";
import Filters from "./Components/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "./Components/SearchBar";
import { SideBar } from "./Components/SideBar";
import SideBarCollapsed from "./Components/SBC";

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
