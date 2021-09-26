import React from "react";
import statistics from "../../res/images/pie_chart.png";

export const StatisticsDisplay = () => {
  return (
    <div style={{}}>
      <img
        src={statistics}
        style={{
          position: "absolute",
          left: "70%",
          top: "15%",
          width: "29%",
          height: "40%",
        }}
        alt="statistics"
      />
    </div>
  );
};
