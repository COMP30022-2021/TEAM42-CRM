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

  return (
    <div>
      <p1 style={{ top: "16%", left: "9%" }}>Name</p1>
      <input
        className="addInput"
        style={{ top: "23%", left: "9%" }}
        type="text"
        placeholder="Enter Customer's Name"
        value={customerName}
        onChange={(e) => setText1(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "9%" }}>Email Address</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "9%" }}
        type="text"
        placeholder="Enter Customer's Email address"
        value={customer_email}
        onChange={(e) => setText2(e.target.value)}
      ></input>

      <p1 style={{ top: "52%", left: "9%" }}>First Visit</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "9%" }}
        type="date"
        placeholder=""
        value={dateFirstVisit}
        onChange={(e) => setText5(e.target.value)}
      ></input>

      <p1 style={{ top: "16%", left: "55.5%" }}>Address</p1>

      <input
        className="addInput"
        style={{ top: "23%", left: "55.5%" }}
        type="text"
        placeholder="Enter Customer's Address"
        value={customer_address}
        onChange={(e) => setText3(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "55.5%" }}>Date of Birth</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={customer_dob}
        onChange={(e) => setText4(e.target.value)}
      ></input>

      <p1 style={{ top: "53%", left: "55.5%" }}>Phone Number</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "55.5%" }}
        type="text"
        placeholder="Enter Customer's Phone Number"
        value={customerNumber}
        onChange={(e) => setText6(e.target.value)}
      ></input>

      <p1 style={{ top: "70%", left: "9%" }}>Male</p1>
      <p1 style={{ top: "70%", left: "20%" }}>Female</p1>
      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "10.5%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={customerGender}
        value={customerGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "23%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={customerGender}
        value={customerGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />
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
