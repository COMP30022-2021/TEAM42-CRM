import React from "react";
import Header from "../SignIns/SignInHeader";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";

export const ChooseContact = ({ setBlur, setMode }) => {
  return (
    <div className="addVisit">
      <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

      <Header text={"Add New Contact"} top_a={"0%"} width_a={"100%"} />

      <button
        className={
          localStorage.getItem("employeeRole") === "Employee"
            ? "buttonCustomerDisabled"
            : "buttonCustomer"
        }
        style={{ width: "65%", left: "15%", top: "22%" }}
        onClick={() => {
          if (localStorage.getItem("employeeRole") !== "Employee") setMode(1);
        }}
      >
        <p>Add Employee</p>
      </button>

      <button
        className="buttonCustomer"
        style={{ width: "65%", left: "15%", top: "47%" }}
        onClick={() => setMode(2)}
      >
        <p>Add Customer</p>
      </button>

      <button
        className="buttonCustomer"
        style={{ width: "65%", left: "15%", top: "72%" }}
        onClick={() => setMode(3)}
      >
        <p>Add External Vendor</p>
      </button>

      <GrClose
        onClick={() => setBlur(false)}
        style={{ position: "absolute", left: "92%", top: "2.5%" }}
        cursor="pointer"
      />

      <Header text={""} top_a={"100%"} width_a={"100%"} />
    </div>
  );
};
