import React from "react";
import Contacts from "../Components/Contacts/Contacts";
import Filters from "../Components/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import { useLocation } from "react-router";
import { SortDropdown } from "../Components/Contacts/SortDropdown";
import Loading from "../Components/Loading";

export default function ContactPage({ contacts }) {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [value, setValue] = React.useState({ value: "Name", label: "Name" });
  const [loading, setLoading] = React.useState(true);

  const blurred = blur || loading;
  const location = useLocation();
  return (
    <div>
      <div
        className="Page"
        style={{
          filter: blurred ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - Contacts</title>
        </Helmet>

        <Contacts
          contacts={contacts}
          sortBy={value}
          setBlur={setBlur}
          setLoading={setLoading}
        />

        <Filters />
        <SearchBar onClick={setBlur} width={65} />
        <SortDropdown value={value} setValue={setValue} />
      </div>
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
      {loading && <Loading />}
    </div>
  );
}
