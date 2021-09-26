import React from "react";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";
import RecentContacts from "../Components/RecentContacts/RecentContacts";

export default function Dashboard({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  return (
    <div>
      <div
        style={{
          filter: blur ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - Dashboard</title>
        </Helmet>
        <SearchBar onClick={setBlur} />
        <RecentContacts contacts={contacts} />
      </div>
      {sbc ? <SideBarCollapsed setSBC={setSBC} /> : <SideBar setSBC={setSBC} />}
      {blur && <AddPopUp setBlur={setBlur} />}
    </div>
  );
}
