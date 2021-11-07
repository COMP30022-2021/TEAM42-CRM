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
          setRevenue(data.revenue[0]["SUM(total_price)"]);
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
          setNumberTransactions(data.num[0].total_transactions);
        } else {
          alert(data.status_message);
        }
      });

    fetch(
      "https://team42-crm.herokuapp.com/order/getAllSoldProducts" +
        localStorage.getItem("businessID"),
      {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          sortOrder: "DESC",
          limit: 1,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setMostSold(data.products[0].product_id);
        } else {
          alert(data.status_message);
        }
      });

    fetch(
      "https://team42-crm.herokuapp.com/order/getAllSoldProducts" +
        localStorage.getItem("businessID"),
      {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          sortOrder: "ASC",
          limit: 1,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setLeastSold(data.products[0].product_id);
        } else {
          alert(data.status_message);
        }
      });
  };

  React.useEffect(() => {
    loadKeyStatistic();
  }, []);

  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      <div className="chartTitle">Key Statistics</div>

      <div style={{ position: "relative", top: "5%" }}>
        <div className="pStatsDescription">
          Revenue generated: <strong>${revenue}</strong>
        </div>

        <div className="pStatsDescription">
          Number of customer interactions: <strong>{numberTransactions}</strong>
        </div>

        <div className="pStatsDescription">
          Most sold item: <strong>{mostSold}</strong>
        </div>

        <div className="pStatsDescription">
          Least sold item: <strong>{leastSold}</strong>
        </div>
      </div>
    </div>
  );
}
