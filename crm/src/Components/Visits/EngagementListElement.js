import React from "react";

export default function EngagementListElement({ engagement }) {
  return (
    <div className="block" style={{ marginBottom: "0.2%" }}>
      <h4 style={{ left: "15%", top: "12%" }}>{engagement.date}</h4>
      <h4 style={{ left: "40%", top: "12%" }}>{engagement.purpos}</h4>
      <h4 style={{ left: "65%", top: "12%" }}>{engagement.rating}</h4>
      <h4 style={{ left: "85%", top: "12%" }}>{engagement.staff_ID}</h4>
    </div>
  );
}
