import React from "react";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import RecentContacts from "../Components/RecentContacts/RecentContacts";

export default function Dashboard({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <SearchBar />
      <RecentContacts contacts={contacts} />
      {sbc ? <SideBarCollapsed setSBC={setSBC} /> : <SideBar setSBC={setSBC} />}
    </div>
  );
}
