import React from "react";

import { FcStatistics } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import user from "../res/images/user_cropped.jpg";

export default function SBCElements() {
  return (
    <div>
      <img
        src={user}
        style={{
          position: "absolute",
          top: 55,
          left: 11,
          borderRadius: "50%",
          width: 46,
          height: 46,
          display: "block",
        }}
        alt="User"
      />

      <RiDashboardLine className="icon" style={{ top: 183, left: 24 }} />

      <MdPermContactCalendar
        className="icon"
        style={{ color: "#9FBF8E", top: 223, left: 24 }}
      />

      <FcStatistics className="icon" style={{ top: 263, left: 24 }} />

      <FiSettings className="icon" style={{ top: 590, left: 24 }} />
    </div>
  );
}
