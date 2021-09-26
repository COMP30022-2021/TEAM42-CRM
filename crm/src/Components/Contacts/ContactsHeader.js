import React from "react";
import SelectBox from "./SelectBox";

export default function ContactsHeader() {
  return (
    <div className="block" style={{ left: 103, top: 120 }}>
      <SelectBox />
      <h4 style={{ left: "16%", top: "12%" }}>Name</h4>
      <h4 style={{ left: "36%", top: "12%" }}>Gender</h4>
      <h4 style={{ left: "57%", top: "12%" }}>Role</h4>
      <h4 style={{ left: "85%", top: "12%" }}>Email</h4>
    </div>
  );
}
