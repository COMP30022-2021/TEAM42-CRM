import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export default function AddEngagement({ setBlur }) {
  const [Date, setText1] = useState("");
  const [Purpose, setText2] = useState("");
  const [Rating, setText3] = useState("");

  const addEngagement = () => {
    alert("Added Engagement");
    setBlur(false);
  };

  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add Engagement"} top_a={"0%"} width_a={"100%"} />
        <p1 style={{ top: "16%", left: "14%" }}>Date:</p1>

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
          placeholder="Enter the Date"
          value={Date}
          onChange={(e) => setText1(e.target.value)}
        ></input>

        <p1 style={{ top: "36%", left: "15%" }}>Purpose:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "44%",
          }}
          type="text"
          placeholder="Enter the Purpose"
          value={Purpose}
          onChange={(e) => setText2(e.target.value)}
        ></input>

        <p1 style={{ top: "56%", left: "15%" }}>Rating:</p1>

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
          placeholder="Enter the rating out of 10"
          value={Rating}
          onChange={(e) => setText3(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={() => addEngagement()}
          style={{ width: "65%", margin: 10, left: "15%", top: "74%" }}
        >
          <p>Add Engagement</p>
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
