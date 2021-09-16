import React from "react";
import SBCElements from "./SBCElements";

export default function SideBarCollapsed({ setSBC }) {
  const [xPosition, setX] = React.useState(-174);

  return (
    <div>
      <React.Fragment>
        <div
          onMouseOver={() => setSBC(false)}
          onMouseOut={() => setSBC(true)}
          className="side-bar"
          style={{
            transform: `translatex(${xPosition}px)`,
          }}
        ></div>
        <SBCElements />
      </React.Fragment>
    </div>
  );
}
