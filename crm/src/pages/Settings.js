import React from "react";
import { Helmet } from "react-helmet";

import SettingsMainComponent from "../Components/Settings/SettingsMainComponent";
import SearchBar from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar/SideBar";
import SideBarCollapsed from "../Components/SideBar/SBC";
import AddPopUp from "../Components/AddContact/AddPopUp.js";
import ChangePassword from "../Components/Settings/ChangePassword";
import { useLocation } from "react-router";

export const Settings = () => {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const location = useLocation();

  const [changePassword, setChangePassword] = React.useState(false);
  return (
    <div>
      <div
        className="Page"
        style={{
          filter: blur || changePassword ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - Settings</title>
        </Helmet>

        <SearchBar onClick={setBlur} width="95%" />
        <SettingsMainComponent setChangePassword={setChangePassword} />
      </div>
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
      {changePassword && <ChangePassword setBlur={setChangePassword} />}
    </div>
  );
};
