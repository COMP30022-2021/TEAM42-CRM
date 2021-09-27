import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import CustomerInner from "../AddContact/CustomerInner";

export default function UpdateCustomer({ setEditMode, contact }) {
  return (
    <div className="addContact">
      <Header text={"Update Customer Contact"} top_a={"0%"} width_a={"100%"} />

      <CustomerInner contact={contact} />

      <button
        className="button2"
        style={{ width: "25%", margin: 10, left: "23%", top: "81%" }}
      >
        <p>Update Customer</p>
      </button>

      <button
        className="button2"
        style={{
          width: "25%",
          margin: 10,
          left: "52%",
          top: "81%",
          background: "red",
        }}
      >
        <p>Delete Vendor Contact</p>
      </button>

      <GrClose
        onClick={() => setEditMode(false)}
        style={{ position: "absolute", left: "95%", top: "1%" }}
        cursor="pointer"
      />

      <Header text={""} top_a={"100%"} width_a={"100%"} />
    </div>
  );
}

UpdateCustomer.defaultProps = {
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
