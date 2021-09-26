import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "./ExternalVendorInner";

export default function AddExternalVendor({ setBlur, contact }) {
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
            (contact == undefined ? "Create" : "Add") + " Vendor Contact"
          }
          top_a={"0%"}
          width_a={916}
        />
        
        <ExternalVendorInner contact = {contact}/>

        <button
          className="button2"
          onClick={() => setBlur(false)}
          style={{ width: "35%", margin: 10, left: "32%", top: "85%" }}
        >
          <p>{(contact == undefined ? "Create" : "Add") + " Contact"}</p>
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

AddExternalVendor.defaultProps = {
  contact: {
    Name: "",
    Gender: "",
    Email: "",
    Phone: "",
    Address: "",
    tags: "",
    cost: "",
  },
};
