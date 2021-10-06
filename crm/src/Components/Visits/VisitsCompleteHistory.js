import React, { useState, useEffect } from "react";
import Header from "../SignIns/SignInHeader";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";
import VisitsList from "./VisitsList";

export default function VisitsCompleteHistory() {
  const [Total, setContacts] = useState({
    NumberVisits: "100",
    Revenue: "500",
  });

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
      <div
        className="completeHistory"
        style={{
          date: "#FFFCFC",
          item: 476.15,
          people: 400,
          price: "absolute",
        }}
      >
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Contact History"} top_a={"0%"} width_a={"100%"} />

        <VisitsList visits={visits} />

        <GrClose style={{ position: "absolute", left: "92%", top: "2.5%" }} />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
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
