import React from "react";
import VisitTableElement from "./VisitTableElement";

export default function VisitTable({ customerID }) {
  const [history, setHistory] = React.useState([]);

  const totalRevenue = () => {
    if (history.length === 0) return 0.0;
    var sum = 0;
    for (var i = 0; i < history.length; i++) {
      sum += history[i].total_price;
    }
    return sum;
  };

  const getVisitHistory = () => {
    fetch(
      "https://team42-crm.herokuapp.com/transaction/getOneCustomerTransactionHistory" +
        customerID,
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
          setHistory(data.history);
        } else {
          alert(data.status_message);
        }
      });
  };

  React.useEffect(() => {
    getVisitHistory();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", background: "#F8F2F2" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <h1 className="center">Recent Visits</h1>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "17%" }}
        >
          Date:
        </p>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "55%" }}
        >
          Money paid:
        </p>
        {history.slice(0, 3).map((history, index) => (
          <VisitTableElement visit={history} index={index} key={index} />
        ))}
      </div>
      <div style={{ width: "100%", height: "20%", background: "#DAD1D1" }}>
        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "3%" }}
        >
          Total Visits: {history.length}
        </p>

        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "47%" }}
        >
          Total amount: {totalRevenue()}$
        </p>
      </div>
    </div>
  );
}
