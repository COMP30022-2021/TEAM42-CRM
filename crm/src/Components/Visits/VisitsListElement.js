import React from "react";

export default function VisitsListElement({ visit }) {
  console.log(visit);
  return (
    <div className="block">
      <h4 style={{ left: "12.5%", top: "12%" }}>{visit.date}</h4>
      <h4 style={{ left: "32%", top: "12%" }}>
        {visit.name !== null ? visit.name : "Item not in System"}
      </h4>
      <h4 style={{ left: "52%", top: "12%" }}>{visit.number_of_people}</h4>
      <h4 style={{ left: "70%", top: "12%" }}>${visit.total_price}</h4>
      <h4 style={{ left: "90%", top: "12%" }}>{visit.employee_id}</h4>
    </div>
  );
}
