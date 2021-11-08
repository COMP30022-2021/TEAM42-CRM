import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

function AddItem({ setBlur }) {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [price, setPrice] = useState("");

  function attemptAdd() {
    if (name === "") alert("Enter Product Name");
    else if (ID === "") alert("Add Product ID");
    else if (price === "") alert("Add Price");

    fetch("https://team42-crm.herokuapp.com/product/create", {
      method: "post",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        product_id: ID,
        name: name,
        unit_price: parseInt(price),
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
  }

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="changePassword">
        <Header text={"Add New Item"} top_a={"0%"} width_a={"100%"} />
        <div className="pone" style={{ top: "15%", left: "15%" }}>
          Item Name:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "20%" }}
          type="text"
          placeholder="Enter Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "33%", left: "15%" }}>
          Item ID:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "38%" }}
          type="text"
          placeholder="Enter Item ID"
          value={ID}
          onChange={(e) => setID(e.target.value)}
        ></input>

        <div className="pone" style={{ top: "51%", left: "15%" }}>
          Item Price:
        </div>

        <input
          className="inputChangePassword"
          style={{ top: "56%" }}
          type="text"
          placeholder="Enter Item Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={attemptAdd}
          style={{
            width: "65%",
            height: "10%",
            margin: 10,
            left: "15%",
            top: "72%",
          }}
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
