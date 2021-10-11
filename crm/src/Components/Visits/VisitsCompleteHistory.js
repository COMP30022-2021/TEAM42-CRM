import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import VisitsList from "./VisitsList";

export default function VisitsCompleteHistory({ setVisitHistory }) {
  const Total = {
    NumberVisits: "100",
    Revenue: "500",
  };

  const visits = [
    {
      date: "13/11/2020",
      items: "4, 7, 9, 10",
      numberPeople: 3,
      price: 48.5,
      staffID: 3,
    },
    {
      date: "21/03/2020",
      items: "10",
      numberPeople: 1,
      price: 80.5,
      staffID: 7,
    },
    {
      date: "23/05/2020",
      items: "4, 10",
      numberPeople: 4,
      price: 90.5,
      staffID: 4,
    },
  ];
  return (
    <div>
      <div className="completeHistory">
        <Header text={"Visit History"} top_a={"0%"} width_a={"100%"} />
        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <VisitsList visits={visits} />

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
          Total # of visits: {Total.NumberVisits}
        </p>
        <p
          className="p9"
          style={{ position: "absolute", top: "99.5%", left: "60%" }}
        >
          Total Revenue: {Total.Revenue} $
        </p>
      </div>
    </div>
  );
}
