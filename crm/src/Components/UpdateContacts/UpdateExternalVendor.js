import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "../AddContact/ExternalVendorInner";

export default function UpdateExternalVendor({ setEditMode, contact }) {
  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header text={"Update Vendor Contact"} top_a={"0%"} width_a={"100%"} />

        <ExternalVendorInner contact={contact} />

        <button
          className="button2"
          style={{ width: "25%", margin: 10, left: "23%", top: "81%" }}
        >
          <p>Update Vendor Contact</p>
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
    </div>
  );
}

UpdateExternalVendor.defaultProps = {
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
