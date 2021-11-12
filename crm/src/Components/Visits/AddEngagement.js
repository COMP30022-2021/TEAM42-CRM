import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export default function AddEngagement({ setAddEngagement, id }) {
  const [Date, setText1] = useState("");
  const [Purpose, setText2] = useState("");
  const [Rating, setText3] = useState("");

  console.log(id);
  const addEngagement = () => {
    fetch("https://team42-crm.herokuapp.com/engagement/create", {
      method: "post",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        vendor_id: id,
        employee_id: localStorage.getItem("employeeID"),
        business_id: localStorage.getItem("businessID"),
        date: Date,
        purpose: Purpose,
        rating: parseInt(Rating),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          console.log(Purpose);
        } else {
          alert(data.status_message);
        }
      });
    setAddEngagement(false);
  };

  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add Engagement"} top_a={"0%"} width_a={"100%"} />
        <div className="pone" style={{ top: "16%", left: "15%" }}>
          Date:
        </div>

        <input
          className="search-bar2"
          style={{ width: "70%", top: "24%", left: "15%", height: "8%" }}
          type="date"
          placeholder="Enter the Date"
          value={Date}
          onChange={(e) => setText1(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "36%", left: "15%" }}>
          Purpose:
        </div>

        <input
          className="search-bar2"
          style={{ width: "70%", top: "44%", left: "15%", height: "8%" }}
          type="text"
          placeholder="Enter the Purpose"
          value={Purpose}
          onChange={(e) => setText2(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "56%", left: "15%" }}>
          Rating:
        </div>

        <input
          className="search-bar2"
          style={{ width: "70%", top: "64%", left: "15%", height: "8%" }}
          type="text"
          placeholder="Enter the rating out of 10"
          value={Rating}
          onChange={(e) => setText3(e.target.value)}
        ></input>

        <button
          className="buttonCustomer"
          onClick={() => addEngagement()}
          style={{ width: "65%", left: "15%", top: "78%" }}
        >
          <p>Add Engagement</p>
        </button>

        <GrClose
          onClick={() => setAddEngagement(false)}
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}
