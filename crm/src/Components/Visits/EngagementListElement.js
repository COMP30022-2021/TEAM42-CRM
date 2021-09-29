import React from "react";

export default function EngagementListElement({ engagement }) {
  return (
      <div className="block">
        <h4 style={{ left: "18%", top: "12%" }}>{engagement.date}</h4>
        <h4 style={{ left: "50%", top: "12%" }}>{engagement.purpos}</h4>
        <h4 style={{ left: "76%", top: "12%" }}>{engagement.rating}</h4>
      </div>
  );
}
