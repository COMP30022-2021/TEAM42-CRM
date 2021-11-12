import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import EngagementsList from "./EngagementsList";

export default function EngagementCompleteHistory({
  setEngagementHistory,
  id,
}) {
  const [history, setHistory] = React.useState([]);

  const getEngagementHistory = () => {
    fetch("https://team42-crm.herokuapp.com/engagement/findAll/" + id, {
      method: "get",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status_code === 200) {
          console.log(data);
          setHistory(data.engagements);
        } else {
          alert(data.status_message);
        }
      });
  };

  React.useEffect(() => {
    getEngagementHistory();
  }, []);

  return (
    <div>
      <div className="completeHistory">
        <Header text={"Engagement History"} top_a={"0%"} width_a={"100%"} />
        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <EngagementsList engagements={history} />

        <GrClose
          style={{
            position: "absolute",
            left: "92%",
            top: "1.5%",
            cursor: "pointer",
          }}
          onClick={() => setEngagementHistory(false)}
        />
        <p
          className="p9"
          style={{ position: "absolute", top: "99.5%", left: "10%" }}
        >
          Total # of visits: {history.length}
        </p>
      </div>
    </div>
  );
}
