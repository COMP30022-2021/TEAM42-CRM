import React from "react";
import SelectBox from "./SelectBox";

export default function ContactsHeader() {
  return (
    <div
      className="block"
      style={{ position: "sticky", left: 103, top: 0, zIndex: 1 }}
    >
      <SelectBox />
      <h4 style={{ left: "11%", top: "12%" }}>Name</h4>
      <h4 style={{ left: "30%", top: "12%" }}>Gender</h4>
      <h4 style={{ left: "49%", top: "12%" }}>Role</h4>
      <h4 style={{ left: "70%", top: "12%" }}>Email</h4>
      <h4 style={{ left: "88%", top: "12%" }}>Phone Number</h4>
    </div>
  );
}
