import React from "react";
import { Helmet } from "react-helmet";

import StatisticsMainComponent from "../Components/StatisticsPage/StatisticsMainComponent";
import SearchBar from "../Components/SearchBar/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import { useLocation } from "react-router";

export const Statistics = () => {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);

  const location = useLocation();
  return (
    <div>
      <div
        className="Page"
        style={{
          filter: blur ? "blur(2px)" : "",
          overflow: "hidden",
        }}
      >
        <Helmet>
          <title>Lynk - Statistics</title>
        </Helmet>
        <StatisticsMainComponent />
        <SearchBar onClick={setBlur} width={95} />
      </div>
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
    </div>
  );
};
