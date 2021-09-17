import React from "react";
import { SideBarElement } from "./SideBarElement";
import { SideBarUser } from "./SideBarUser";

import { FcStatistics } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

import user from "../../res/images/user_cropped.jpg";

export default function SideBarElements() {
  return (
    <div>
      <SideBarUser image={user} />
      <Link to="/">
        <SideBarElement>
          <h3 style={{ top: 171, left: 58 }}>Dashboard</h3>
          <RiDashboardLine className="icon" style={{ top: 183, left: 24 }} />
        </SideBarElement>
      </Link>

      <Link to="/contacts">
        <SideBarElement>
          <h3 style={{ color: "#9FBF8E", top: 211, left: 58 }}>Contacts</h3>
          <MdPermContactCalendar
            className="icon"
            style={{ color: "#9FBF8E", top: 223, left: 24 }}
          />
        </SideBarElement>
      </Link>

      <SideBarElement>
        <h3 style={{ top: 251, left: 58 }}>Statistics</h3>
        <FcStatistics className="icon" style={{ top: 263, left: 24 }} />
      </SideBarElement>

      <SideBarElement>
        <h3 style={{ top: 578, left: 58 }}>Setting</h3>
        <FiSettings className="icon" style={{ top: 590, left: 24 }} />
      </SideBarElement>
    </div>
  );
}
