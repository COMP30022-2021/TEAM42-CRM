import React from "react";
import Contacts from "../Components/Contacts/Contacts";
import Filters from "../Components/FilterSideBar/Filters";
import { Helmet } from "react-helmet";

import SearchBar from "../Components/SearchBar/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import { useLocation } from "react-router";
import { SortDropdown } from "../Components/Contacts/SortDropdown";
import Loading from "../Components/Loading";
import { OrderDropdown } from "../Components/Contacts/OrderDropdown";

export default function ContactPage() {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [value, setValue] = React.useState({ value: "Name", label: "Name" });
  const [order, setOrder] = React.useState({
    value: "Ascending",
    label: "Ascending",
  });
  const [loading, setLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    isMale: true,
    isFemale: false,
    postcodes: [],
    tags: [],
    to: "",
    from: "",
    ageTo: "",
    ageFrom: "",
  });

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
          sortBy={value}
          order={order}
          setBlur={setBlur}
          setLoading={setLoading}
          filters={filters}
        />

        <Filters setFilters={setFilters} filters={filters} />
        <SearchBar onClick={setBlur} width={65} />
        <OrderDropdown value={order} setValue={setOrder} />
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
