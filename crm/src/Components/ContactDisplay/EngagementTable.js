import React from "react";
import EngagementElement from "./EngagementElement";

export default function EngagementTable() {
  const total = {
    engagement: "9",
  };

  const engagements = [
    {
      date: "27/06/2017",
      purpose: "Repair",
    },
    {
      date: "23/06/2017",
      purpose: "Personal",
    },
    {
      date: "27/05/2017",
      purpose: "Payment",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: "#F8F2F2" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <h1 class="center">Recent Engagement</h1>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "17%" }}
        >
          Date:
        </p>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "61%" }}
        >
          Purpose:
        </p>
        {engagements.map((engagement, index) => (
          <EngagementElement engagement={engagement} index={index} />
        ))}
      </div>

      <div style={{ width: "100%", height: "20%", background: "#DAD1D1" }}>
        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "3%" }}
        >
          Total Contacs: {total.engagement}
        </p>
      </div>
    </div>
  );
}
