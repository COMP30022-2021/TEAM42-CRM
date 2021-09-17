import "../SideBar.css";
import React from "react";
import SideBarElements from "./SideBarElements";

export const SideBar = ({ setSBC }) => {
  return (
    <React.Fragment>
      <div
        onMouseLeave={() => setSBC(true)}
        className="side-bar"
        style={{
          left: 0,
        }}
      >
        <SideBarElements />
      </div>
    </React.Fragment>
  );
};
