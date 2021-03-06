import React from "react";
import Header from "../SignIns/SignInHeader";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export default function AddVisit({ setAddVisit, id }) {
  const [totalAmount, setTotalAmount] = React.useState("");
  const [ID, setID] = React.useState("");
  const [allItems, setAllItems] = React.useState([]);
  const [NumberOfPeople, setNumPeople] = React.useState("");

  const addVisit = () => {
    fetch("https://team42-crm.herokuapp.com/transaction/create", {
      method: "post",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        customer_id: id,
        employee_id: localStorage.getItem("employeeID"),
        business_id: localStorage.getItem("businessID"),
        date: new Date(),
        number_of_people: NumberOfPeople,
        total_price: totalAmount,
        product: parseInt(ID),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          console.log(data);
        } else {
          alert(data.status_message);
        }
      });
    setAddVisit(false);
  };

  const addItem = () => {
    allItems.push(ID);
    setID("");
    alert("Added Item");
  };

  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add Visit"} top_a={"0%"} width_a={"100%"} />
        <div className="pone" style={{ top: "16%", left: "14%" }}>
          Total amount:
        </div>

        <input
          className="search-bar2"
          style={{ width: "70%", top: "24%", left: "15%", height: "8%" }}
          type="text"
          placeholder="Enter the total amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "36%", left: "15%" }}>
          ID of Item:
        </div>

        <input
          className="search-bar2"
          style={{ width: "40%", top: "44%", left: "15%", height: "8%" }}
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

        <div className="pone" style={{ top: "56%", left: "15%" }}>
          Number of People:
        </div>

        <input
          className="search-bar2"
          style={{ left: "15%", height: "8%", width: "70%", top: "64%" }}
          type="text"
          placeholder="Enter the number of people"
          value={NumberOfPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        ></input>

        <button
          className="buttonCustomer"
          onClick={() => addVisit()}
          style={{ width: "65%", left: "17%", top: "78%" }}
        >
          <p>Add Visit</p>
        </button>

        <GrClose
          onClick={() => setAddVisit(false)}
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}
