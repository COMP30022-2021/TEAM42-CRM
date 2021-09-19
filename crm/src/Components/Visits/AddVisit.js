import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export default function AddVisit({ setBlur }) {
  const [totalAmount, setTotalAmount] = useState("");
  const [ID, setID] = useState("");
  const [NumberOfPeople, setNumPeople] = useState("");

  const addVisit = () => {
    alert("Added Visit");
    setBlur(false);
  };

  const addItem = () => {
    setTotalAmount("");
    setID("");
    setNumPeople("");

    alert("Added Item");
  };

  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add Visit"} top_a={"0%"} width_a={"100%"} />
        <p1 style={{ top: "16%", left: "14%" }}>Total amount:</p1>

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
          onChange={(e) => setTotalAmount(e.target.value)}
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
          onChange={(e) => setID(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={() => addItem()}
          style={{ width: "25%", margin: 10, left: "58%", top: "38%" }}
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
          onChange={(e) => setNumPeople(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={() => addVisit()}
          style={{ width: "65%", margin: 10, left: "15%", top: "74%" }}
        >
          <p>Add Visit</p>
        </button>

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}
