import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import EngagementsList from "./EngagementsList";

export default function EngagementCompleteHistory({ setEngagementHistory }) {
  const Total = { Number: "18" };

  const engagements = [
    {
      date: "23/08/2029",
      purpos: "Repair",
      rating: "5",
      staff_ID: 3,
    },
    {
      date: "16/05/2019",
      purpos: "Payment",
      rating: "3",
      staff_ID: 7,
    },
    {
      date: "11/05/2018",
      purpos: "Help",
      rating: "9",
      staff_ID: 2,
    },
  ];

  return (
    <div>
      <div className="completeHistory">
        <Header text={"Engagement History"} top_a={"0%"} width_a={"100%"} />
        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <EngagementsList engagements={engagements} />

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
          Total # of visits: {Total.Number}
        </p>
      </div>
    </div>
  );
}
