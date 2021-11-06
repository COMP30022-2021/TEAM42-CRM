import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import VisitsList from "./VisitsList";

export default function VisitsCompleteHistory({ setVisitHistory, customerID }) {
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
    console.log(
      "https://team42-crm.herokuapp.com/customer/getOneCustomerTransactionHistory" +
        customerID
    );
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
        console.log(data);
        if (data.status_code === 200) {
          console.log(data);
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
    <div>
      <div className="completeHistory">
        <Header text={"Visit History"} top_a={"0%"} width_a={"100%"} />
        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <VisitsList visits={history} />

        <GrClose
          style={{
            position: "absolute",
            left: "92%",
            top: "1.5%",
            cursor: "pointer",
          }}
          onClick={() => setVisitHistory(false)}
        />

        <p
          className="p9"
          style={{ position: "absolute", top: "99.5%", left: "10%" }}
        >
          Total # of visits: {history.length}
        </p>
        <p
          className="p9"
          style={{ position: "absolute", top: "99.5%", left: "60%" }}
        >
          Total Revenue: {totalRevenue()} $
        </p>
      </div>
    </div>
  );
}
