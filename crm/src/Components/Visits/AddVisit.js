import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import {GrClose} from "react-icons/gr"

export default function AddVisit() {
    const [totalAmount, setText1] = useState("");
    const [ID, setText2] = useState("");
    const [NumberOfPeople,setText3] = useState("");

    const addVisit = () => {
        alert("Added Visit");
    };

    const addItem = () => {
        alert("Added Item");
    };

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

        <Header text={"Add Visit"} top_a={"0%"} width_a={476.15}/>
        <p1 style={{ top: "16%", left:"14%"}}>Total amount:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "24%",
          }}
          type="text"
          placeholder="Enter the total amount"
          value={totalAmount}
          onChange={(e) => setText1(e.target.value)}
        ></input>

        <p1 style={{ top: "36%", left: "15%" }}>ID of Item:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "40%",
            top: "44%",
          }}
          type="text"
          placeholder="Enter ID"
          value={ID}
          onChange={(e) => setText2(e.target.value)}
        ></input>

        <button
        className="button2"
        onClick={() => addItem()}
        style={{ width: "25%", margin: 10, left: "57%", top: "39%" }}
        >
        <p>Add Item</p>
        </button>

        <p1 style={{ top: "56%", left: "15%" }}>Number of People:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "64%",
          }}
          type="text"
          placeholder="Enter the number of people"
          value={NumberOfPeople}
          onChange={(e) => setText3(e.target.value)}
        ></input>

        
        <button
        className="button2"
        onClick={() => addVisit()}
        style={{ width: "65%", margin: 10, left: "15%", top: "74%" }}>
        <p>Add Visit</p>
        </button>

        <GrClose
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
        />

        <Header text={""} top_a={"100%"} width_a={476.15} />
      </div>
    </div>
  );
}

