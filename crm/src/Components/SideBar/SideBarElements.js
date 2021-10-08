import React from "react";
import { SideBarElement } from "./SideBarElement";
import { SideBarUser } from "./SideBarUser";
import { FcStatistics } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import user from "../../res/images/user_cropped.jpg";

import logo from "../../res/images/Logos/Logo_Design5.png";

export default function SideBarElements({ path }) {
  return (
    <div>
      <img src={logo} className="sideBarLogo"></img>
      <SideBarUser image={user} />
      <Link to="/">
        <div>
          <h3
            style={{
              color: path === undefined ? "#9FBF8E" : "#cfd7e3",
              top: "26%",
              left: "25%",
            }}
          >
            Dashboard
          </h3>
          <RiDashboardLine
            className="icon"
            style={{
              color: path === undefined ? "#9FBF8E" : "#cfd7e3",
              top: "28%",
              left: "11%",
            }}
          />
        </div>
      </Link>

      <Link to="/contacts">
        <SideBarElement>
          <h3
            style={{
              color: path === "/contacts" ? "#9FBF8E" : "#cfd7e3",
              top: "32%",
              left: "25%",
            }}
          >
            Contacts
          </h3>
          <MdPermContactCalendar
            className="icon"
            style={{
              color: path === "/contacts" ? "#9FBF8E" : "#cfd7e3",
              top: "34%",
              left: "11%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/statistics">
        <SideBarElement>
          <h3
            style={{
              color: path === "/statictics" ? "#9FBF8E" : "#cfd7e3",
              top: "38%",
              left: "25%",
            }}
          >
            Statistics
          </h3>
          <FcStatistics className="icon" style={{ top: "40%", left: "11%" }} />
        </SideBarElement>
      </Link>

      <Link to="/settings">
        <SideBarElement>
          <h3
            style={{
              color: path === "/settings" ? "#9FBF8E" : "#cfd7e3",
              bottom: "8%",
              left: "25%",
            }}
          >
            Setting
          </h3>
          <FiSettings
            className="icon"
            style={{
              color: path === "/settings" ? "#9FBF8E" : "#cfd7e3",
              bottom: "10%",
              left: "11%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/login" onClick={() => localStorage.setItem("loggedIn", false)}>
        <SideBarElement>
          <h3 style={{ bottom: "2%", left: "25%" }}>Logout</h3>
          <FiLogOut className="icon" style={{ bottom: "4%", left: "11%" }} />
        </SideBarElement>
      </Link>
    </div>
  );
}
