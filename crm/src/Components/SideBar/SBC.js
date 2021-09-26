import React from "react";
import SBCElements from "./SBCElements";

export default function SideBarCollapsed({ setSBC, path }) {
  return (
    <React.Fragment>
      <div
        onMouseEnter={() => setSBC(false)}
        onMouseOver={() => setSBC(false)}
        className="side-bar"
        style={{
          left: "-13%",
        }}
      >
        <SBCElements path={path} />
      </div>
    </React.Fragment>
  );
}
