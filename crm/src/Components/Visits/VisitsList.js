import React from "react";
import VisitsListElement from "./VisitsListElement";

export default function ContactList({ visits }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "5.6%",
        width: "14%",
        height: "85%",
        overflowY: "scroll",
      }}
    >
      <div className="block" style={{ position: "sticky", zIndex: 1 }}>
        <h4 style={{ left: "20%", top: "12%" }}>Date    Items   Number of numberPeople  Price</h4>
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