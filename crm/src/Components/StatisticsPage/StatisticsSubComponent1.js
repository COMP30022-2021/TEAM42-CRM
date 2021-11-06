import React from "react";

export default function StatisticsSubComponent1({ left, top }) {
  const [revenue, setRevenue] = React.useState("");
  const [numberTransactions, setNumberTransactions] = React.useState("");
  const [mostSold, setMostSold] = React.useState("");
  const [leastSold, setLeastSold] = React.useState("");

  const loadKeyStatistic = () => {
    fetch(
      "https://team42-crm.herokuapp.com/transaction/getTotalRevenueByDate/" +
        localStorage.getItem("businessID"),
      {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          start_date: "2000-1-1",
          end_date: "2100-1-1",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          console.log(data);
          setRevenue(data.revenue[0]["SUM(total_price)"]);
          console.log(data.revenue[0]["SUM(total_price)"]);
        } else {
          alert(data.status_message);
        }
      });

    fetch(
      "https://team42-crm.herokuapp.com/transaction/getNumberOfTransactions/" +
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
          setNumberTransactions(data.num[0].total_transactions);
          console.log(data.num[0].total_transactions);
        } else {
          alert(data.status_message);
        }
      });

    // fetch(
    //   "https://team42-crm.herokuapp.com/order/getAllSoldProducts" +
    //     localStorage.getItem("businessID"),
    //   {
    //     method: "post",
    //     mode: "cors",
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     }),
    //     body: JSON.stringify({
    //       sortOrder: "DESC",
    //       limit: 1,
    //     }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status_code === 200) {
    //       console.log(data);
    //       setMostSold(data.products[0].product_id);
    //       console.log(data.products[0].product_id);
    //     } else {
    //       alert(data.status_message);
    //     }
    //   });
    //     method: "post",
    //     mode: "cors",
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     }),
    //     body: JSON.stringify({
    //       sortOrder: "DESC",
    //       limit: 1,
    //     }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status_code === 200) {
    //       console.log(data);
    //       setMostSold(data.products[0].product_id);
    //       console.log(data.products[0].product_id);
    //     } else {
    //       alert(data.status_message);
    //     }
    //   });

    // fetch(
    //   "https://team42-crm.herokuapp.com/order/getAllSoldProducts" +
    //     localStorage.getItem("businessID"),
    //   {
    //     method: "post",
    //     mode: "cors",
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     }),
    //     body: JSON.stringify({
    //       sortOrder: "ASC",
    //       limit: 1,
    //     }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status_code === 200) {
    //       console.log(data);
    //       setLeastSold(data.products[0].product_id);
    //       console.log(data.products[0].product_id);
    //     } else {
    //       alert(data.status_message);
    //     }
    //   });
  };

  React.useEffect(() => {
    loadKeyStatistic();
  }, []);

  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      <div className="chartTitle">Key Statistics</div>

      <div className="pStatsDescription">Revenue generated: ${revenue}</div>

      <div className="pStatsDescription">
        Number of customer interactions: {numberTransactions}
      </div>

      <div className="pStatsDescription">Most sold item: {mostSold}</div>

      <div className="pStatsDescription">Least sold item: {leastSold}</div>
    </div>
  );
}
