import React from "react";
import StatisticsSubComponent1 from "./StatisticsSubComponent1";
import StatisticsSubComponent2 from "./StatisticsSubComponent2";
import StatisticsSubComponent3 from "./StatisticsSubComponent3";
import StatisticsSubComponent4 from "./StatisticsSubComponent4";

export default function StatisticsMainComponent() {
  return (
    <div className="statisticsPage">
      {localStorage.getItem("employeeRole") !== "Employee" ? (
        <div>
          <StatisticsSubComponent1 left="51%" top="0%" />
          <StatisticsSubComponent2 left="4%" top="0%" />
          <StatisticsSubComponent3 left="4%" top="43%" />
          <StatisticsSubComponent4 left="51%" top="43%" />
        </div>
      ) : (
        <div>You do not have access to view this page.</div>
      )}
    </div>
  );
}
