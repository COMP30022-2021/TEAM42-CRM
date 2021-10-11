import React from "react";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";
import RecentContacts from "../Components/RecentContacts/RecentContacts";
import { StatisticsDisplay } from "../Components/Statistics/StatisticsDisplay";
import Loading from "../Components/Loading";

export default function Dashboard({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  return (
    <div>
      <div
        className="Page"
        style={{
          filter: blur || loading ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - Dashboard</title>
        </Helmet>
        <SearchBar onClick={setBlur} width="95%" />
        <RecentContacts contacts={contacts} setLoading={setLoading} />
        <StatisticsDisplay />
      </div>
      {sbc ? <SideBarCollapsed setSBC={setSBC} /> : <SideBar setSBC={setSBC} />}
      {blur && <AddPopUp setBlur={setBlur} />}
      {loading && <Loading />}
    </div>
  );
}
