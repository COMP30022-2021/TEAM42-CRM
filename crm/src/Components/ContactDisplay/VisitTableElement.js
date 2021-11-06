import React from "react";

export default function VisitTableElement({ visit, index }) {
  return (
    <div>
      <p
        className="p7"
        style={{
          position: "absolute",
          top: "" + (30 + index * 15) + "%",
          left: "12%",
        }}
      >
        {visit.date}
      </p>
      <p
        className="p7"
        style={{
          position: "absolute",
          top: "" + (30 + index * 15) + "%",
          left: "64%",
        }}
      >
        ${visit.total_price}
      </p>
    </div>
  );
}
