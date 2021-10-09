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
      <div className="pStatsHeading">Key Statistics</div>

      <div className="pStatsDescription">Revenue generated:</div>
      <div className="pStats" style={{ top: "28.5%" }}>
        ${info.Revenue}
      </div>

      <div className="pStatsDescription">Number of Items Sold:</div>
      <div className="pStats" style={{ top: "44.5%" }}>
        {info.NumberItems}
      </div>

      <div className="pStatsDescription">Most sold item:</div>
      <div className="pStats" style={{ top: "60.5%" }}>
        {info.MostSold}
      </div>

      <div className="pStatsDescription">Least sold item:</div>
      <div className="pStats" style={{ top: "77.5%" }}>
        {info.LeastSold}
      </div>

      <button className="statButtons" style={{ top: "5%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Add Filters</div>
      </button>
      <button className="statButtons" style={{ top: "22%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Clear Filters</div>
      </button>
    </div>
  );
}
