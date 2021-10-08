import React from "react";
import { GrClose } from "react-icons/gr";

export default function StatisticsSubComponent3Filters() {
  return (
    <div className="filterBar">
      <div className="p3" style={{ left: "10%", top: "5%" }}>
        Gender:
      </div>
      <button
        className="buttonFilter"
        style={{
          left: "6%",
          width: "40%",
          top: "10%",
        }}
      >
        <p style={{ color: "#109CF1" }}>Male</p>
      </button>
      <button
        className="buttonFilter"
        style={{
          left: "54%",
          width: "40%",
          top: "10%",
        }}
      >
        <p style={{ color: "#109CF1" }}>Female</p>
      </button>

      <div className="p3" style={{ left: "10%", top: "25%" }}>
        Year:
      </div>
      <input
        style={{ top: "30%", left: "10%", width: "30%" }}
        className="numInput"
        type="text"
        min={2019}
      ></input>
      <button
        className="buttonAdd"
        style={{
          left: "50%",
          width: "40%",
          top: "30%",
          lineHeight: "13px",
        }}
      >
        <p className="pButton">Set Year</p>
      </button>

      <GrClose
        style={{ position: "absolute", left: "92%", top: "2.5%" }}
        cursor="pointer"
      />
    </div>
  );
}
