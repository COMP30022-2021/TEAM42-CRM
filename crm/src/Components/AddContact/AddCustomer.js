import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import CustomerInner from "./CustomerInner";

const getDate = () => {
  const time = new Date();
  return (
    time.getFullYear() +
    "-" +
    ("0" + (time.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + time.getDate()).slice(-2)
  );
};

export default function AddCustomer({ setBlur }) {
  const date = getDate();
  const [customerName, setName] = useState("");
  const [customerEmail, setEmail] = useState("");
  const [customerAddress, setAddress] = useState("");
  const [customerDOB, setDOB] = useState(date);
  const [dateFirstVisit, setFirstVisit] = useState(date);
  const [customerPhone, setPhone] = useState("");
  const [customerIsMale, setIsMale] = useState(false);

  const properties = {
    customerName,
    setName,
    customerEmail,
    setEmail,
    customerAddress,
    setAddress,
    customerDOB,
    setDOB,
    dateFirstVisit,
    setFirstVisit,
    customerPhone,
    setPhone,
    customerIsMale,
    setIsMale,
  };

  const addContact = () => {
    if (customerName === "") alert("Add Customer's Name");
    else if (customerEmail === "") alert("Add Customer's Email");
    else if (customerAddress === "") alert("Add Customer's Addres");
    else if (customerDOB === "") alert("Add Customer's DOB");
    else if (customerPhone === "") alert("Add Customer's Phone Number");
    else {
      fetch("https://team42-crm.herokuapp.com/customer/create", {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          businessID: localStorage.getItem("businessID"),
          email: customerEmail,
          name: customerName,
          phone: customerPhone,
          address: customerAddress,
          firstVisit: dateFirstVisit,
          birthday: customerDOB,
          gender: customerIsMale ? 1 : 0,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 200) alert("Customer Added Successfully");
          window.location.reload();
        });
    }
  };

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header text="Add Customer Contact" top_a={"0%"} width_a={"100%"} />

        <CustomerInner values={properties} />

        <button
          className="buttonCustomer"
          onClick={() => addContact()}
          style={{ width: "35%", left: "32%", top: "82%" }}
        >
          <p>Add Customer</p>
        </button>

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}
