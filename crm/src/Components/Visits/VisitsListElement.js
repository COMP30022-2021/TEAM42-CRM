import React from "react";

export default function VisitsListElement({ visit }) {
  return (
      <div className="block">
        <h4 style={{ left: "12%", top: "12%" }}>{visit.date}</h4>
        <h4 style={{ left: "40%", top: "12%" }}>{visit.items}</h4>
        <h4 style={{ left: "62%", top: "12%" }}>{visit.numberPeople}</h4>
        <h4 style={{ left: "82%", top: "12%" }}>{visit.price}</h4>
      </div>
  );
}
