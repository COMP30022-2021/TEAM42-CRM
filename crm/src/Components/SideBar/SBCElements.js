import React from "react";
import { SideBarElement } from "./SideBarElement";
import { ImStatsDots } from "react-icons/im";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";
import user from "../../res/images/user_cropped.jpg";

import logo from "../../res/images/Logos/Logo_Design5.png";

export default function SBCElements({ path }) {
  const url =
    path != undefined && path.split("/")[1] === "contacts"
      ? path.split("/").slice(0, 2).join("/")
      : path;

  return (
    <div>
      <img src={logo} className="SBCLogo"></img>
      <img
        src={user}
        style={{
          position: "absolute",
          top: "15%",
          left: "86%",
          borderRadius: "50%",
          width: 46,
          height: 46,
          display: "block",
          transform: "translate(-50%, -50%)",
        }}
        alt="User"
      />

      <SideBarElement>
        <RiDashboardLine
          className="icon"
          style={{
            color: url === undefined ? "#9FBF8E" : "#cfd7e3",
            top: "28%",
            left: "83%",
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <MdPermContactCalendar
          className="icon"
          style={{
            color: url === "/contacts" ? "#9FBF8E" : "#cfd7e3",
            top: "34%",
            left: "83%",
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <ImStatsDots
          className="icon"
          style={{
            color: url === "/statistics" ? "#9FBF8E" : "#cfd7e3",
            top: "51%",
            left: "83%",
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <FiSettings
          className="icon"
          style={{
            color: url === "/settings" ? "#9FBF8E" : "#cfd7e3",
            bottom: "10%",
            left: "83%",
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <FiLogOut className="icon" style={{ bottom: "4%", left: "83%" }} />
      </SideBarElement>
    </div>
  );
}
