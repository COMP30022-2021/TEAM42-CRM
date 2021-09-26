import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export default function CustomerInner({ contact }) {
  const [customerName, setText1] = useState(contact.Name);
  const [customer_email, setText2] = useState(contact.Email);
  const [customer_address, setText3] = useState(contact.Address);
  const [customer_dob, setText4] = useState(contact.DateOfBirth);
  const [dateFirstVisit, setText5] = useState(contact.FirstVisit);
  const [customerNumber, setText6] = useState(contact.Phone);
  const [customerGender, setGender] = useState(contact.Gender);

  console.log(contact.name);
  function createContact() {
    alert(
      customerName +
        customer_email +
        customer_dob +
        dateFirstVisit +
        customer_address
    );
  }

  return (
    <div>
      <p1 style={{ top: "16%", left: "8%" }}>Name</p1>
      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          width: "35%",
          top: "24%",
        }}
        type="text"
        placeholder="Enter Customer's Name"
        value={customerName}
        onChange={(e) => setText1(e.target.value)}
      ></input>

      <p1 style={{ top: "36%", left: "8%" }}>Email Address</p1>

      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          width: "35%",
          top: "44%",
        }}
        type="text"
        placeholder="Enter Customer's Email address"
        value={customer_email}
        onChange={(e) => setText2(e.target.value)}
      ></input>

      <p1 style={{ top: "56%", left: "8%" }}>First Visit</p1>

      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          width: "35%",
          top: "64%",
        }}
        type="date"
        placeholder=""
        value={dateFirstVisit}
        onChange={(e) => setText5(e.target.value)}
      ></input>

      <p1 style={{ top: "16%", left: "56.5%" }}>Customer Address</p1>

      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          width: "35%",
          left: "56%",
          top: "24%",
        }}
        type="text"
        placeholder="Enter Customer's Address"
        value={customer_address}
        onChange={(e) => setText3(e.target.value)}
      ></input>

      <p1 style={{ top: "36%", left: "56.5%" }}>Date of Birth</p1>

      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          left: "56%",
          width: "35%",
          top: "44%",
        }}
        type="date"
        placeholder=""
        value={customer_dob}
        onChange={(e) => setText4(e.target.value)}
      ></input>

      <p1 style={{ top: "76%", left: "8%" }}>Male:</p1>
      <p1 style={{ top: "76%", left: "20%" }}>Female:</p1>
      <input
        style={{
          position: "absolute",
          height: 28,
          left: "9%",
          width: "10%",
          top: "76%",
        }}
        type="checkbox"
        checked={customerGender}
        value={customerGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: 28,
          left: "22.5%",
          width: "10%",
          top: "76%",
        }}
        type="checkbox"
        checked={customerGender}
        value={customerGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />

      <p1 style={{ top: "56%", left: "56.5%" }}>Phone Number</p1>

      <input
        className="search-bar"
        style={{
          background: "#F0EBEB",
          border: 0,
          height: 28,
          left: "56%",
          width: "35%",
          top: "64%",
        }}
        type="text"
        placeholder="Enter Customer's Phone Number"
        value={customerNumber}
        onChange={(e) => setText6(e.target.value)}
      ></input>
    </div>
  );
}

CustomerInner.defaultProps = {
  contact: {
    name: "",
    email: "",
    address: "",
    dob: "",
    first_visit: "",
    phoneNumber: "",
    gender: "",
  },
};
