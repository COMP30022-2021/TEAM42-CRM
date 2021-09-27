import React from "react";
import { useState } from "react";

export default function ExternalVendorInner({ contact }) {
  const [vendorName, setText1] = useState(contact.Name);
  const [vendorEmail, setText2] = useState(contact.Email);
  const [vendorAddress, setText3] = useState(contact.Address);
  const [vendorTags, setText4] = useState(contact.tags);
  const [vendorCost, setText5] = useState(contact.cost);
  const [vendorNumber, setText6] = useState(contact.Phone);
  const [vendorGender, setGender] = useState(contact.Gender);

  return (
    <div>
      <p1 style={{ top: "16%", left: "9%" }}>Name</p1>
      <input
        className="addInput"
        style={{ top: "23%", left: "9%" }}
        type="text"
        placeholder="Enter Vendor's Name"
        value={vendorName}
        onChange={(e) => setText1(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "9%" }}>Email Address</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "9%" }}
        type="text"
        placeholder="Enter Vendor's Email Address"
        value={vendorEmail}
        onChange={(e) => setText2(e.target.value)}
      ></input>

      <p1 style={{ top: "52%", left: "9%" }}>Rate</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "9%" }}
        type="text"
        placeholder="Enter Vendor's Rate"
        value={vendorCost}
        onChange={(e) => setText5(e.target.value)}
      ></input>

      <p1 style={{ top: "16%", left: "55.5%" }}>Address</p1>

      <input
        className="addInput"
        style={{ top: "23%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Address"
        value={vendorAddress}
        onChange={(e) => setText3(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "55.5%" }}>Tags</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Tags"
        value={vendorTags}
        onChange={(e) => setText4(e.target.value)}
      ></input>

      <p1 style={{ top: "53%", left: "55.5%" }}>Phone Number</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Phone Number"
        value={vendorNumber}
        onChange={(e) => setText6(e.target.value)}
      ></input>

      <p1 style={{ top: "70%", left: "9%" }}>Male</p1>
      <p1 style={{ top: "70%", left: "20%" }}>Female</p1>
      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "10.5%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={vendorGender}
        value={vendorGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "23%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={vendorGender}
        value={vendorGender}
        onChange={(e) => setGender(e.currentTarget.checked)}
      />
    </div>
  );
}

ExternalVendorInner.defaultProps = {
  contact: {
    Name: "",
    Gender: false,
    Email: "",
    Phone: "",
    Address: "",
    tags: "",
    cost: "",
  },
};
