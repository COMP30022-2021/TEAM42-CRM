import React from "react";
import SBCElements from "./SBCElements";

export default function SideBarCollapsed({ setSBC }) {
  return (
    <React.Fragment>
      <div
        onMouseOver={() => setSBC(false)}
        className="side-bar"
        style={{
          left: -170,
        }}
      >
        <SBCElements />
      </div>
    </React.Fragment>
  );
}
