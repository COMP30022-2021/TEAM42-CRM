import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "../AddContact/ExternalVendorInner";

export default function UpdateExternalVendor({ setEditMode, contact }) {
  const [vendorName, setName] = useState(contact.name);
  const [vendorEmail, setEmail] = useState(contact.email);
  const [vendorAddress, setAddress] = useState(contact.address);
  const [vendorTags, setTags] = useState(contact.tags);
  const [vendorCost, setVendorCost] = useState(contact.cost);
  const [vendorPhone, setPhone] = useState(contact.phone);
  const [vendorIsMale, setIsMale] = useState(contact.gender === 1);

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
  console.log("hi");
  return (
    <div className="addContact">
      <Header text={"Update Vendor Contact"} top_a={"0%"} width_a={"100%"} />

      <ExternalVendorInner values={properties} />

      <button
        className="buttonCustomer"
        style={{ width: "25%", left: "23%", top: "81%" }}
      >
        <p>Update Vendor</p>
      </button>

      <button
        className="deleteButton"
        style={{ width: "25%", left: "52%", top: "81%" }}
      >
        <p>Delete Vendor</p>
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
