import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import EmployeeInner from "./EmployeeInner";

export default function AddEmployee({ setBlur }) {
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
        <Header text={"Add Employee Contact"} top_a={"0%"} width_a={916} />

        <EmployeeInner />

        <button
          className="buttonCustomer"
          onClick={() => setBlur(false)}
          style={{ width: "35%", left: "32%", top: "85%" }}
        >
          <p>Add Employee</p>
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
