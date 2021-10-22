import React from "react";
import { SideBarElement } from "./SideBarElement";
import { SideBarUser } from "./SideBarUser";
import {
  MdPermContactCalendar,
  MdSubdirectoryArrowRight,
} from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";

import { Link } from "react-router-dom";
import user from "../../res/images/user_cropped.jpg";

import logo from "../../res/images/Logos/Logo_Design5.png";
import { useHistory } from "react-router";

export default function SideBarElements({ path }) {
  const url =
    path != undefined && path.split("/")[1] === "contacts"
      ? path.split("/").slice(0, 3).join("/")
      : path;
  const history = useHistory();

  return (
    <div>
      <img
        src={logo}
        className="sideBarLogo"
        onClick={() => history.push("")}
      ></img>
      <SideBarUser image={user} />
      <Link to="/">
        <div>
          <h3
            style={{
              color: url === undefined ? "#9FBF8E" : "#cfd7e3",
              top: "28%",
              left: "25%",
            }}
          >
            Dashboard
          </h3>
          <RiDashboardLine
            className="icon"
            style={{
              color: url === undefined ? "#9FBF8E" : "#cfd7e3",
              top: "28%",
              left: "11%",
            }}
          />
        </div>
      </Link>

      <Link to="/contacts/all/all">
        <SideBarElement>
          <h3
            style={{
              color: url === "/contacts/all" ? "#9FBF8E" : "#cfd7e3",
              top: "40%",
              left: "25%",
            }}
          >
            Contacts
          </h3>
          <MdPermContactCalendar
            className="icon"
            style={{
              color: url === "/contacts/all" ? "#9FBF8E" : "#cfd7e3",
              top: "40%",
              left: "11%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/contacts/employees/all">
        <SideBarElement>
          <h3
            style={{
              color: url === "/contacts/employees" ? "#9FBF8E" : "#cfd7e3",
              top: "44%",
              left: "35%",
            }}
          >
            Employees
          </h3>
          <MdSubdirectoryArrowRight
            className="icon"
            style={{
              color: url === "/contacts/employees" ? "#9FBF8E" : "#cfd7e3",
              top: "44%",
              left: "25%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/contacts/customers/all">
        <SideBarElement>
          <h3
            style={{
              color: url === "/contacts/customers" ? "#9FBF8E" : "#cfd7e3",
              top: "48%",
              left: "35%",
            }}
          >
            Customers
          </h3>
          <MdSubdirectoryArrowRight
            className="icon"
            style={{
              color: url === "/contacts/customers" ? "#9FBF8E" : "#cfd7e3",
              top: "48%",
              left: "25%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/contacts/vendors/all">
        <SideBarElement>
          <h3
            style={{
              color: url === "/contacts/vendors" ? "#9FBF8E" : "#cfd7e3",
              top: "52%",
              left: "35%",
            }}
          >
            External Vendors
          </h3>
          <MdSubdirectoryArrowRight
            className="icon"
            style={{
              color: url === "/contacts/vendors" ? "#9FBF8E" : "#cfd7e3",
              top: "52%",
              left: "25%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/statistics">
        <SideBarElement>
          <h3
            style={{
              color: url === "/statistics" ? "#9FBF8E" : "#cfd7e3",
              top: "34%",
              left: "25%",
            }}
          >
            Statistics
          </h3>
          <ImStatsDots
            className="icon"
            style={{
              color: url === "/statistics" ? "#9FBF8E" : "#cfd7e3",
              top: "34%",
              left: "11%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/settings">
        <SideBarElement>
          <h3
            style={{
              color: url === "/settings" ? "#9FBF8E" : "#cfd7e3",
              bottom: "10%",
              left: "25%",
            }}
          >
            Setting
          </h3>
          <FiSettings
            className="icon"
            style={{
              color: url === "/settings" ? "#9FBF8E" : "#cfd7e3",
              bottom: "10%",
              left: "11%",
            }}
          />
        </SideBarElement>
      </Link>

      <Link to="/login" onClick={() => localStorage.setItem("loggedIn", false)}>
        <SideBarElement>
          <h3 style={{ bottom: "4%", left: "25%" }}>Logout</h3>
          <FiLogOut className="icon" style={{ bottom: "4%", left: "11%" }} />
        </SideBarElement>
      </Link>
    </div>
  );
}
