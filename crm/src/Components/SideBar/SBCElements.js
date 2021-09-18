import React from "react";
import { SideBarElement } from "./SideBarElement";

import { FcStatistics } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";
import user from "../../res/images/user_cropped.jpg";

export default function SBCElements({ path }) {
  return (
    <div>
      <img
        src={user}
        style={{
          position: "absolute",
          top: 55,
          left: 181,
          borderRadius: "50%",
          width: 46,
          height: 46,
          display: "block",
        }}
        alt="User"
      />

      <SideBarElement>
        <RiDashboardLine
          className="icon"
          style={{
            color: path === undefined ? "#9FBF8E" : "#cfd7e3",
            top: 183,
            left: 194,
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <MdPermContactCalendar
          className="icon"
          style={{
            color: path === "/contacts" ? "#9FBF8E" : "#cfd7e3",
            top: 223,
            left: 194,
          }}
        />
      </SideBarElement>

      <SideBarElement>
        <FcStatistics className="icon" style={{ top: 263, left: 194 }} />
      </SideBarElement>

      <SideBarElement>
        <FiSettings className="icon" style={{ bottom: 62, left: 194 }} />
      </SideBarElement>

      <SideBarElement>
        <FiLogOut className="icon" style={{ bottom: 22, left: 194 }} />
      </SideBarElement>
    </div>
  );
}
