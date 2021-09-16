import "../SideBar.css";
import React from "react";
import SideBarElements from "./SideBarElements";

export const SideBar = ({ setSBC }) => {
  const [xPosition, setX] = React.useState(-0);

  return (
    <React.Fragment>
      <div
        onMouseOver={() => toggleMenu(xPosition, setX, setSBC)}
        onMouseOut={() => toggleMenu(xPosition, setX, setSBC)}
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
        }}
      >
        <SideBarElements />
      </div>
    </React.Fragment>
  );
};

const toggleMenu = (xPosition, setX, setSBC) => {
  if (xPosition < 0) {
    setX(0);
  } else {
    setX(-0);
    setSBC(true);
  }
};
