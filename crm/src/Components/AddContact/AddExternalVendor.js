import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "./ExternalVendorInner";

export default function AddExternalVendor({ setBlur }) {
  const [vendorName, setName] = useState("");
  const [vendorEmail, setEmail] = useState("");
  const [vendorAddress, setAddress] = useState("");
  const [vendorTags, setTags] = useState("");
  const [vendorCost, setVendorCost] = useState("");
  const [vendorPhone, setPhone] = useState("");
  const [vendorIsMale, setIsMale] = useState(true);

  const properties = {
    vendorName,
    setName,
    vendorEmail,
    setEmail,
    vendorAddress,
    setAddress,
    vendorTags,
    setTags,
    vendorCost,
    setVendorCost,
    vendorPhone,
    setPhone,
    vendorIsMale,
    setIsMale,
  };

  const attemptSignUp = () => {
    if (vendorName === "") alert("Add vendor's Name");
    else if (vendorEmail === "") alert("Add vendor's Email");
    else if (vendorAddress === "") alert("Add vendor's Addres");
    else if (vendorTags === "") alert("Add vendor's Tags");
    else if (vendorPhone === "") alert("Add vendor's Phone Number");
    else {
      fetch("https://team42-crm.herokuapp.com/vendor/create", {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          businessID: localStorage.getItem("businessID"),
          email: vendorEmail,
          name: vendorName,
          phone: vendorPhone,
          address: vendorAddress,
          rate: vendorCost,
          tags: vendorTags,
          gender: vendorIsMale ? 1 : 0,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 200) alert("Vendor Added Successfully");
          window.location.reload();
        });
    }
  };
  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header text="Add Vendor Contact" top_a={"0%"} width_a={"100%"} />

        <ExternalVendorInner values={properties} />

        <button
          className="buttonCustomer"
          onClick={() => attemptSignUp()}
          style={{ width: "35%", left: "32%", top: "81%" }}
        >
          <p>Add Vendor</p>
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
