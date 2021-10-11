import React from "react";
import StatisticsSubComponent2 from "../StatisticsPage/StatisticsSubComponent2";
import StatisticsSubComponent4 from "../StatisticsPage/StatisticsSubComponent4";

export const StatisticsDisplay = () => {
  return (
    <div
      style={{ position: "absolute", height: "100%", width: "70%", zIndex: -2 }}
    >
      <StatisticsSubComponent2 left="97%" top="15%" dashboard={true} />
      <StatisticsSubComponent4 left="97%" top="60%" dashboard={true} />
    </div>
  );
};
