import React from "react";
import Header from "../SignIns/SignInHeader";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export default function AddVisit({ setBlur }) {
  const [ID, setID] = React.useState("");
  const [NumberOfPeople, setNumPeople] = React.useState("");

  const addVisit = () => {
    alert("Added Visit");
    setBlur(false);
  };

  const addItem = () => {
    setID("");
    setNumPeople("");
    alert("Added Item");
  };

  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add Visit"} top_a={"0%"} width_a={"100%"} />

        <div className="pone" style={{ top: "20%", left: "15%" }}>ID of Item:</div>

        <input
          className="search-bar2"
          style={{width: "40%",top: "30%",left:"15%",height:"8%"}}
          type="text"
          placeholder="Enter ID"
          value={ID}
          onChange={(e) => setID(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={() => addItem()}
          style={{ width: "25%", margin: 10, left: "58%", top: "25.5%" }}
        >
          <p>Add Item</p>
        </button>

        <div className="pone" style={{ top: "48%", left: "15%" }}>Number of People:</div>

        <input
          className="search-bar2"
          style={{left:"15%",height:"8%", width: "70%",top: "58%",}}
          type="text"
          placeholder="Enter the number of people"
          value={NumberOfPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        ></input>

        <button
          className="buttonCustomer"
          onClick={() => addVisit()}
          style={{ width: "65%", left: "15%", top: "74%" }}>
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