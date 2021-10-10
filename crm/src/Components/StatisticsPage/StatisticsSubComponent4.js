import React from "react";
import Chart from "react-google-charts";

export default function StatisticsSubComponent4({ left, top, dashboard }) {
  const data = [
    ["Quarter", "ID:1", "ID:2"],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
  ];

  return (
    <div
      className="statisticsDisplay"
      style={{
        left: left,
        top: top,
        filter: dashboard
          ? ""
          : "drop-shadow(6px 6px 8px rgba(0, 0.25, 0.25, 0.25))",
      }}
    >
      <Chart
        width={"100%%"}
        height={"100%"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: "Quarter",
          },
          vAxis: {
            title: "Number of Items sold",
          },
          series: {
            1: { curveType: "function" },
          },
          title: "Items Popularity Over Time",
          chartArea: { left: "15%", width: "60%", height: "60%", top: "20%" },
          titleTextStyle: {
            color: "#265573",
            fontName: "Poppins",
            fontSize: 18,
            bold: true,
            italic: false,
          },
          backgroundColor: { fill: dashboard ? "#f5f6f8" : "ffffff" },
          legend: { position: "right", alignment: "center" },

          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />

      <button className="statButtons" style={{ top: "5%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Add Filters</div>
      </button>
      <button className="statButtons" style={{ top: "22%", left: "78%" }}>
        <div style={{ color: "#ffffff" }}>Clear Filters</div>
      </button>
    </div>
  );
}

StatisticsSubComponent4.defaultProp = {
  dashboard: false,
};
