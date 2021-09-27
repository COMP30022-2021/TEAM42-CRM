import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import EmployeeInner from "../AddContact/EmployeeInner";

export default function UpdateEmployee({ setEditMode, contact }) {
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
        <Header text={"Update Employee Contact"} top_a={"0%"} width_a={916} />

        <EmployeeInner contact={contact} />

        <button
          className="button2"
          style={{ width: "25%", margin: 10, left: "20%", top: "83.5%" }}
        >
          <p>Update Employee</p>
        </button>

        <button
          className="button2"
          style={{
            width: "25%",
            margin: 10,
            left: "50%",
            top: "83.5%",
            background: "red",
          }}
        >
          <p>Delete Employee</p>
        </button>

        <GrClose
          onClick={() => setEditMode(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={916} />
      </div>
    </div>
  );
}

UpdateEmployee.defaultProps = {
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
