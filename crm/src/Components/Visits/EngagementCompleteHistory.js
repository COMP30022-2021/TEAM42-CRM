import React, { useState, useEffect } from "react";
import Header from "../SignIns/SignInHeader";
import Helmet from "react-helmet";
import {GrClose} from "react-icons/gr"
import EngagementListElement from "./EngagementListElement";
import EngagementsList from "./EngagementsList";

export default function EngagementCompleteHistory() {
    const [Total, setContacts] = useState({
        Number: "100",
      });

      const engagements = [
        {
          date: "23/08/2029",
          purpos:"Repair",
          rating:"5"
        },
        {
          date: "16/05/2019",
          purpos:"Payment",
          rating:"3"
        },
        {
          date: "11/05/2018",
          purpos:"Help",
          rating:"9"
        },
      ];

    return (
    <div>
      <div
        className="logInBox"
        style={{
          background: "#FFFCFC",
          width: 476.15,
          height: 400,
          position: "absolute",
          left: "50%",
          top: "52.5%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Engagement History"} top_a={"0%"} width_a={476.15}/>
        
        <EngagementsList engagements={engagements}/>
        
        <GrClose
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
        />

        <Header text={""} top_a={"100%"} width_a={476.15} />
        <p className="p9" style={{position: "absolute",top:"99.5%",left:"10%"}}>Number of engagements: {Total.Number}</p> 
      </div>
    </div>
  );
}

