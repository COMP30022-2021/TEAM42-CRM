import React from "react";
import SideBarElements from "./SideBarElements";

export const SideBar = ({ setSBC, path }) => {
  return (
    <React.Fragment>
      <div
        onMouseLeave={() => setSBC(true)}
        className="side-bar"
        style={{
          left: 0,
        }}
      >
        <SideBarElements path={path} />
      </div>
    </React.Fragment>
  );
};
