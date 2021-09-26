import React from "react";
import VisitTableElement from "./VisitTableElement";

export default function VisitTable() {
  const total = {
    visits: "9",
    spent: "365.70",
  };

  const visits = [
    {
      date: "27/06/2017",
      price: "09.50",
    },
    {
      date: "23/06/2017",
      price: "12.50",
    },
    {
      date: "27/05/2017",
      price: "56.50",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: "#F8F2F2" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <h1 class="center">Recent Visits</h1>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "17%" }}
        >
          Date:
        </p>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "55%" }}
        >
          Money paid:
        </p>
        {visits.map((visit, index) => (
          <VisitTableElement visit={visit} index={index} />
        ))}
      </div>
      <div style={{ width: "100%", height: "20%", background: "#DAD1D1" }}>
        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "3%" }}
        >
          Total Visits: {total.visits}
        </p>

        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "47%" }}
        >
          Total amount: {total.spent}$
        </p>
      </div>
    </div>
  );
}
