import React from "react";
import VisitsListElement from "./VisitsListElement";

export default function ContactList({ visits }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        width: "100%",
        height: "85%",
        overflowY: "scroll",
      }}
    >
      <div className="block" style={{ position: "sticky", zIndex: 1 }}>
        <h4 style={{ left: "12%", top: "12%" }}>Date</h4>
        <h4 style={{ left: "40%", top: "12%" }}>Items</h4>
        <h4 style={{ left: "62%", top: "12%" }}># People</h4>
        <h4 style={{ left: "82%", top: "12%" }}>Price</h4>
      </div>
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
      {visits.map((visit) => (
        <VisitsListElement visit={visit} />
      ))}
    </div>
  );
}