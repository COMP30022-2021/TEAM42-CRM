import React from "react";
import Chart from "react-google-charts";

export default function StatisticsSubComponent3({ left, top, dashboard }) {
  const info = {
    first: 9000,
    second: 15000,
    third: 12000,
    foourth: 10000,
  };
  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      <Chart
        left={"2.5%"}
        width={"86%"}
        height={"100%"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Quarter", "Sales"],
          ["First", info.first],
          ["Second", info.second],
          ["Third", info.third],
          ["Fourth", info.foourth],
        ]}
        options={{
          chart: {
            title: "Company Performance Per Quarter",
          },
          chartArea: { left: "15%", width: "55%", height: "10%", top: "50%" },
          titleTextStyle: {
            color: "#265573",
            fontName: "Poppins",
            fontSize: 18,
            bold: true,
            italic: false,
          },
          legend: { position: "right", alignment: "end" },
          backgroundColor: { fill: dashboard ? "#f5f6f8" : "#ffffff" },
          is3D: true,
        }}
        rootProps={{ "data-testid": "3" }}
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

StatisticsSubComponent3.defaultProp = {
  dashboard: false,
};
