import React, { useState, useEffect } from "react";
import Header from "../SignIns/SignInHeader";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import {GrClose} from "react-icons/gr"
import VisitsList from "./VisitsList";


export default function VisitsCompleteHistory({visits}) {
    const [Total, setContacts] = useState({
        Visits: "100",
        Revenue: "500",
      });

      const visits = [
        {
          date: "23/08/2029",
          items: "4, 6, 10",
          numberPeople: "2" ,
          price: "20" ,
        },
        {
          date: "16/05/2019",
          items: "4, 6, 7",
          numberPeople: "3" ,
          price: "70" ,
        },
        {
          date: "11/05/2018",
          items: "3, 4",
          numberPeople: "2" ,
          price: "20" ,
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

        <Header text={"Contact History"} top_a={"0%"} width_a={476.15}/>
        
        <VisitsList vistis = {visits}/>

        <GrClose
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
        />


        <Header text={""} top_a={"100%"} width_a={476.15} />
        <p className="p9" style={{position: "absolute",top:"99.5%",left:"10%"}}>Total # of visits: {Total.Visits}</p> 
        <p className="p9" style={{position: "absolute",top:"99.5%",left:"60%"}}>Total Revenue: {Total.Revenue} $</p> 
      </div>
    </div>
  );
}

