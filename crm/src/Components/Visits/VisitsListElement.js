import React from "react";

export default function VisitsListElement({ visit }) {
  return (
    <div
      className="block"
      style={{ position: "sticky", zIndex: 1, marginBottom: 0 }}
    >
      <h4 style={{ left: "12.5%", top: "12%" }}>{visit.date}</h4>
      <h4 style={{ left: "32%", top: "12%" }}>{visit.items}</h4>
      <h4 style={{ left: "52%", top: "12%" }}>{visit.numberPeople}</h4>
      <h4 style={{ left: "70%", top: "12%" }}>{visit.price}</h4>
      <h4 style={{ left: "90%", top: "12%" }}>{visit.staffID}</h4>
    </div>
  );
}
