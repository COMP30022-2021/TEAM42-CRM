import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

function AddItem({ setBlur }) {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [price, setPrice] = useState("");

  function attemptAdd() {}

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="changePassword">
        <Header text={"Add New Item"} top_a={"0%"} width_a={"100%"} />
        <div className="pone" style={{ top: "15%", left: "15%" }}>
          Item Name:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "23%" }}
          type="text"
          placeholder="Enter the name of the new item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "33%", left: "15%" }}>
          Item ID:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "41%" }}
          type="text"
          placeholder="Enter the ID of the item"
          value={ID}
          onChange={(e) => setID(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "51%", left: "15%" }}>
          Item Price:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "59%" }}
          type="text"
          placeholder="Enter the price of the Item"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={attemptAdd}
          style={{ width: "65%", margin: 10, left: "15%", top: "72%" }}
        >
          <p>Add item</p>
        </button>

        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "90%", top: "1%" }}
          cursor="pointer"
        />
      </div>
    </div>
  );
}

export default AddItem;
