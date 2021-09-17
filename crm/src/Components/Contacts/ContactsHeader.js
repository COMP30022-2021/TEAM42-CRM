import React from "react";
import SelectBox from "./SelectBox";

export default function ContactsHeader() {
  return (
    <div className="block" style={{ left: 103, top: 120 }}>
      <SelectBox />
      <h4 style={{ left: 85, top: 0 }}>Name</h4>
      <h4 style={{ left: 285, top: 0 }}>Gender</h4>
      <h4 style={{ left: 485, top: 0 }}>Role</h4>
      <h4 style={{ left: 685, top: 0 }}>Email</h4>
    </div>
  );
}
