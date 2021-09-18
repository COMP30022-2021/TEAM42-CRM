import React from "react";
import { SideBarElement } from "./SideBarElement";
import { SideBarUser } from "./SideBarUser";

import { FcStatistics } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";

import { Link } from "react-router-dom";

import user from "../../res/images/user_cropped.jpg";

export default function SideBarElements({ path }) {
  return (
    <div>
      <SideBarUser image={user} />

      <Link to="/">
        <div>
          <h3
            style={{
              color: path === undefined ? "#9FBF8E" : "#cfd7e3",
              top: 171,
              left: 58,
            }}
          >
            Dashboard
          </h3>
          <RiDashboardLine
            className="icon"
            style={{
              color: path === undefined ? "#9FBF8E" : "#cfd7e3",
              top: 183,
              left: 24,
            }}
          />
        </div>
      </Link>

      <Link to="/contacts">
        <SideBarElement>
          <h3
            style={{
              color: path === "/contacts" ? "#9FBF8E" : "#cfd7e3",
              top: 211,
              left: 58,
            }}
          >
            Contacts
          </h3>
          <MdPermContactCalendar
            className="icon"
            style={{
              color: path === "/contacts" ? "#9FBF8E" : "#cfd7e3",
              top: 223,
              left: 24,
            }}
          />
        </SideBarElement>
      </Link>

      <SideBarElement>
        <h3 style={{ top: 251, left: 58 }}>Statistics</h3>
        <FcStatistics className="icon" style={{ top: 263, left: 24 }} />
      </SideBarElement>

      <SideBarElement>
        <h3 style={{ bottom: 50, left: 58 }}>Setting</h3>
        <FiSettings className="icon" style={{ bottom: 62, left: 24 }} />
      </SideBarElement>

      <Link to="/login">
        <SideBarElement>
          <h3 style={{ bottom: 10, left: 58 }}>Logout</h3>
          <FiLogOut className="icon" style={{ bottom: 22, left: 24 }} />
        </SideBarElement>
      </Link>
    </div>
  );
}
