import React from "react";
import Chart from "react-google-charts";

export default function StatisticsSubCompoent2({ left, top }) {
  const info = {
    NumberEmployee: 100,
    NumberExternalVendor: 150,
    NumberCutomers: 200,
  };
  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Type", "Number"],
          ["Employee", info.NumberEmployee],
          ["External Vendor", info.NumberExternalVendor],
          ["Customer", info.NumberCutomers],
        ]}
        options={{
          title: "Percentage Distribution of Contacts",
          chartArea: { left: "15%", width: "90%", height: "80%", top: "20%" },
          titleTextStyle: {
            color: "#265573",
            fontName: "Poppins",
            fontSize: 18,
            bold: true,
            italic: false,
          },
          legend: { position: "right", alignment: "center" },

          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}
