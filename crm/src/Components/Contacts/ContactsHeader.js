import React from "react";

export default function ContactsHeader() {
  return (
    <div
      className="block"
      style={{ position: "sticky", left: 103, top: 0, zIndex: 1 }}
    >
      <h4 style={{ left: "7%", top: "15%" }}>Name</h4>
      <h4 style={{ left: "27.5%", top: "12%" }}>Gender</h4>
      <h4 style={{ left: "46.5%", top: "12%" }}>Role</h4>
      <h4 style={{ left: "67%", top: "12%" }}>Email</h4>
      <h4 style={{ left: "87%", top: "12%" }}>Phone Number</h4>
    </div>
  );
}
