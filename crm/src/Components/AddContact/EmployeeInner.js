import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export default function EmployeeInner({ contact }) {
  const [employeeName, setText1] = useState(contact.Name);
  const [employeeEmail, setText2] = useState(contact.Email);
  const [employeeAddress, setText3] = useState(contact.Address);
  const [employeeDOB, setText4] = useState(contact.DateOfBirth);
  const [dateJoined, setText5] = useState(contact.DateJoined);
  const [employeeNumber, setText6] = useState(contact.Phone);
  const [employeeGender, setGender] = useState(contact.Gender);
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
        placeholder="Enter Employee's Name"
        value={employeeName}
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
        placeholder="Enter Employee's Email Address"
        value={employeeEmail}
        onChange={(e) => setText2(e.target.value)}
      ></input>

      <p1 style={{ top: "56%", left: "8%" }}>Start Date</p1>

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
        placeholder="Enter Employee's Starting Date"
        value={dateJoined}
        onChange={(e) => setText5(e.target.value)}
      ></input>

      <p1 style={{ top: "16%", left: "56.5%" }}>Address</p1>

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
        placeholder="Enter Employee's Address"
        value={employeeAddress}
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
        placeholder="Enter Employee's birthday"
        value={employeeDOB}
        onChange={(e) => setText4(e.target.value)}
      ></input>

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
        placeholder="Enter Employee's Phone Number"
        value={employeeNumber}
        onChange={(e) => setText6(e.target.value)}
      ></input>

      <p1 style={{ top: "76%", left: "8%" }}>Male</p1>
      <p1 style={{ top: "76%", left: "20%" }}>Female</p1>

      <input
        style={{
          position: "absolute",
          height: 28,
          left: "9%",
          width: "10%",
          top: "76%",
        }}
        type="checkbox"
        checked={employeeGender}
        value={employeeGender}
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
        checked={employeeGender}
        value={employeeGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />
    </div>
  );
}

EmployeeInner.defaultProps = {
  contact: {
    Name: "",
    Gender: "",
    Email: "",
    Phone: "",
    Address: "",
    DateOfBirth: "",
    DateJoined: "",
  },
};
