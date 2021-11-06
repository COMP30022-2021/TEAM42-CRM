import React from "react";
import VisitsListElement from "./VisitsListElement";

export default function ContactList({ visits }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        width: "100%",
        height: "90%",
        overflowY: "scroll",
      }}
    >
      <div className="block" style={{ position: "sticky", zIndex: 1, top: 0 }}>
        <h4 style={{ left: "12.5%", top: "12%" }}>Date</h4>
        <h4 style={{ left: "32%", top: "12%" }}>Items</h4>
        <h4 style={{ left: "52%", top: "12%" }}># People</h4>
        <h4 style={{ left: "70%", top: "12%" }}>Price</h4>
        <h4 style={{ left: "90%", top: "12%" }}>StaffID</h4>
        &nbsp;
      </div>

      {visits.map((visit, index) => (
        <VisitsListElement visit={visit} key={index} />
      ))}
    </div>
  );
}
