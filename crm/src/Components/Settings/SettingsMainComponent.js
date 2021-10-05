import React from "react";
import SpecificSetting from "./SpecificSetting";
import { FaKey } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

export default function SettingsMainComponent({ setChangePassword }) {
  return (
    <div className="settingsDisplay">
      <div className="block" style={{ height: "76px", cursor: "default" }}>
        <p
          className="pSettings"
          style={{ left: "5%", color: "#265573", fontSize: 32 }}
        >
          Settings
        </p>
      </div>
      <SpecificSetting
        name={"Change Password"}
        icon={<FaKey className="iconSettings" size="40%" />}
        onClick={setChangePassword}
      />
      <SpecificSetting
        name={"Create new Employee Account"}
        icon={<IoMdPersonAdd className="iconSettings" size="40%" />}
      />
      <SpecificSetting
        name={"Delete Employee Account"}
        icon={<AiFillDelete className="iconSettings" size="40%" />}
      />
    </div>
  );
}