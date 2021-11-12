import React from "react";
import EngagementElement from "./EngagementElement";

export default function EngagementTable({ vendor_id }) {
  const [history, setHistory] = React.useState([]);
  console.log(vendor_id);
  const getEngagementHistory = () => {
    fetch("https://team42-crm.herokuapp.com/engagement/findAll/" + vendor_id, {
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
    <div style={{ width: "100%", height: "100%", background: "#F8F2F2" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <h1 className="center" style={{ postion: "absolute", top: "10%" }}>
          Recent Engagement
        </h1>

        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "17%" }}
        >
          Date:
        </p>
        <p
          className="p6"
          style={{ position: "absolute", top: "12%", left: "61%" }}
        >
          Purpose:
        </p>
        {history.map((engagement, index) => (
          <EngagementElement
            engagement={engagement}
            index={index}
            key={index}
          />
        ))}
      </div>

      <div style={{ width: "100%", height: "20%", background: "#DAD1D1" }}>
        <p
          className="p5"
          style={{ position: "absolute", top: "84%", left: "3%" }}
        >
          Total Contacs: {history.length}
        </p>
      </div>
    </div>
  );
}
