import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import CustomerInner from "../AddContact/CustomerInner";

export default function UpdateCustomer({ setEditMode, contact }) {
  function deleteContact() {
    alert("Deleted");
  }

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
        <Header text={"Update Customer Contact"} top_a={"0%"} width_a={916} />

        <CustomerInner contact={contact} />

        <button
          className="button2"
          style={{ width: "25%", margin: 10, left: "20%", top: "83.5%" }}
        >
          <p>Update Customer Contact</p>
        </button>

        <button
          className="button2"
          onClick={deleteContact}
          style={{
            width: "25%",
            margin: 10,
            left: "50%",
            top: "83.5%",
            background: "red",
          }}
        >
          <p>Delete Customer Contact</p>
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
