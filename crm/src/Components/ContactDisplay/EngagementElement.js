import React from "react";

export default function VisitTableElement({ engagement, index }) {
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
        {engagement.date}
      </p>
      <p
        className="p7"
        style={{
          position: "absolute",
          top: "" + (30 + index * 15) + "%",
          left: "64%",
        }}
      >
        {engagement.purpose}
      </p>
    </div>
  );
}
