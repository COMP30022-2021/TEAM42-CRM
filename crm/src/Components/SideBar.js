import "../SideBar.css";
import React from "react";
import SideBarElements from "./SideBarElements";

export const SideBar = ({ setSBC }) => {
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          left: 0,
        }}
      >
        <SideBarElements />
      </div>
      <div
        onMouseOut={() => setSBC(true)}
        className="side-bar"
        style={{ left: 0, opacity: 0 }}
      ></div>
    </React.Fragment>
  );
};
