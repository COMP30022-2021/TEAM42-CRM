import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import CustomerInner from "./CustomerInner";

export default function AddCustomer({ setBlur }) {
  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header text="Add Vendor Contact" top_a={"0%"} width_a={"100%"} />

        <CustomerInner />

        <button
          className="button2"
          onClick={() => setBlur(false)}
          style={{ width: "35%", margin: 10, left: "32%", top: "81%" }}
        >
          <p>Add Contact</p>
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
