import React from "react";
import Chart from "react-google-charts";

export default function StatisticsSubComponent3({ left, top, dashboard }) {
  const [revenueQ1, setRevenueQ1] = React.useState("");
  const [revenueQ2, setRevenueQ2] = React.useState("");
  const [revenueQ3, setRevenueQ3] = React.useState("");
  const [revenueQ4, setRevenueQ4] = React.useState("");

  const loadRevenueStatistic = () => {
    fetch(
      "https://team42-crm.herokuapp.com/transaction/getOneYearRevenueByQuarterInYear2019/" +
        localStorage.getItem("businessID"),
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          console.log(data);
          setRevenueQ1(data.revenue[0].revenue);
          console.log(data.revenue[0].revenue);
          setRevenueQ2(data.revenue[1].revenue);
          console.log(data.revenue[1].revenue);
          setRevenueQ3(data.revenue[2].revenue);
          console.log(data.revenue[2].revenue);
          setRevenueQ4(data.revenue[3].revenue);
          console.log(data.revenue[3].revenue);
        } else {
          alert(data.status_message);
        }
      });
  };

  React.useEffect(() => {
    loadRevenueStatistic();
  }, []);

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
          ["First", parseInt(revenueQ1)],
          ["Second", parseInt(revenueQ2)],
          ["Third", parseInt(revenueQ3)],
          ["Fourth", parseInt(revenueQ4)],
        ]}
        options={{
          chart: { title: "." },
          chartArea: { left: "15%", width: "55%", height: "10%", top: "50%" },
          titlePosition: "none",
          legend: { position: "right", alignment: "end" },
          backgroundColor: { fill: dashboard ? "#f5f6f8" : "#ffffff" },
          is3D: true,
        }}
        rootProps={{ "data-testid": "3" }}
      />

      <h2 class="chartTitle">Total Revenue Per Quarter</h2>
    </div>
  );
}

StatisticsSubComponent3.defaultProp = {
  dashboard: false,
};
