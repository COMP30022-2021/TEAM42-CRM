import React from "react";
import EngagementListElement from "./EngagementListElement";

export default function EngagementsList({ engagements }) {
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
        <h4 style={{ left: "15%", top: "12%" }}>Date</h4>
        <h4 style={{ left: "40%", top: "12%" }}>Purpos</h4>
        <h4 style={{ left: "65%", top: "12%" }}>Rating</h4>
        <h4 style={{ left: "85%", top: "12%" }}>Staff_ID</h4>
      </div>
      {engagements.map((engagement) => (
        <EngagementListElement engagement={engagement} />
      ))}
     {engagements.map((engagement) => (
        <EngagementListElement engagement={engagement} />
      ))}
      {engagements.map((engagement) => (
        <EngagementListElement engagement={engagement} />
      ))}
      {engagements.map((engagement) => (
        <EngagementListElement engagement={engagement} />
      ))}
    </div>
  );
}