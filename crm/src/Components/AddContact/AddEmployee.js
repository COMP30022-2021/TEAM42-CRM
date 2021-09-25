import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export default function AddEmployee({ setBlur, contact }) {
  const [employeeName, setText1] = useState(contact.Name);
  const [employeeEmail, setText2] = useState(contact.Email);
  const [employeeAddress, setText3] = useState(contact.Address);
  const [employeeDOB, setText4] = useState(contact.DateOfBirth);
  const [dateJoined, setText5] = useState(contact.DateJoined);
  const [employeeNumber, setText6] = useState(contact.Phone);
  const [employeeGender, setGender] = useState(contact.Gender);

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div
        style={{
          background: "#FFFCFC",
          width: 916,
          height: 524,
          position: "absolute",
          left: "50%",
          top: "52.5%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Header
          text={
            (contact == undefined ? "Create" : "Update") + " Employee Contact"
          }
          top_a={"0%"}
          width_a={916}
        />
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

        <button
          className="button2"
          onClick={() => setBlur(false)}
          style={{ width: "35%", margin: 10, left: "32%", top: "85%" }}
        >
          <p>{(contact == undefined ? "Create" : "Update") + " Contact"}</p>{" "}
        </button>

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} />
      </div>
    </div>
  );
}

AddEmployee.defaultProps = {
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
