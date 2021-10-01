import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const SortDropdown = ({ value, setValue }) => {
  const options = ["Name", "Email", "Gender", "Role"];
  return (
    <div
      style={{
        position: "absolute",
        left: "8%",
        top: "9.8%",
      }}
    >
      <Dropdown
        className="dropdown"
        options={options}
        onChange={(e) => {
          setValue(e);
        }}
        value={value}
        placeholder="Select an option"
      />
      <p style={{ position: "absolute", top: "-15%", color: "#3366BB" }}>
        Sort By:
      </p>
    </div>
  );
};
