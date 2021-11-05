import React from "react";

export default function StatisticsSubComponent1({ left, top }) {
  const info = {
    Revenue: 10000,
    NumberItems: 350,
    MostSold: "Coke",
    LeastSold: "Fried chicken",
  };
  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      <div className="chartTitle">Key Statistics</div>

      <div className="pStatsDescription">Revenue generated: ${info.Revenue}</div>

      <div className="pStatsDescription">Number of Items Sold: {info.NumberItems}</div>

      <div className="pStatsDescription">Most sold item: {info.MostSold}</div>

      <div className="pStatsDescription">Least sold item: {info.LeastSold}</div>

      <button className="statButtons" style={{ top: "5%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Add Filters</div>
      </button>
      <button className="statButtons" style={{ top: "22%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Clear Filters</div>
      </button>
    </div>
  );
}
