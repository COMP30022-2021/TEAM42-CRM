import React from "react";
import { Link } from "react-router-dom";

import StatisticsSubComponent2 from "../StatisticsPage/StatisticsSubComponent2";
import StatisticsSubComponent4 from "../StatisticsPage/StatisticsSubComponent4";

export const StatisticsDisplay = () => {
  return (
    <Link to="/statistics">
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "70%",
          left: "68%",
        }}
      >
        <StatisticsSubComponent2 left="0%" top="15%" dashboard={true} />
        <StatisticsSubComponent4 left="0%" top="58%" dashboard={true} />
      </div>
    </Link>
  );
};
