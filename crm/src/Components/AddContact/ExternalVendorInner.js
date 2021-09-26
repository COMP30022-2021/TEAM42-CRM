import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export default function ExternalVendorInner({contact}) {
    const [vendorName, setText1] = useState(contact.Name);
    const [vendorEmail, setText2] = useState(contact.Email);
    const [vendorAddress, setText3] = useState(contact.Address);
    const [vendorTags, setText4] = useState(contact.tags);
    const [vendorCost, setText5] = useState(contact.cost);
    const [vendorNumber, setText6] = useState(contact.Phone);
    const [vendorGender, setGender] = useState(contact.Gender);
    return (
        <div>
            <p1 style={{ top: "16%", left: "8%" }}>Name</p1>
            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                width: "35%",
                top: "24%",
            }}
            type="text"
            placeholder="Enter Vendor's Name"
            value={vendorName}
            onChange={(e) => setText1(e.target.value)}
            ></input>

            <p1 style={{ top: "36%", left: "8%" }}>Email Address</p1>

            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                width: "35%",
                top: "44%",
            }}
            type="text"
            placeholder="Enter Vendor's Email Address"
            value={vendorEmail}
            onChange={(e) => setText2(e.target.value)}
            ></input>

            <p1 style={{ top: "56%", left: "8%" }}>Rate</p1>

            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                width: "35%",
                top: "64%",
            }}
            type="text"
            placeholder="Enter Vendor's Rate"
            value={vendorCost}
            onChange={(e) => setText5(e.target.value)}
            ></input>

            <p1 style={{ top: "16%", left: "56.5%" }}>Address</p1>

            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                width: "35%",
                left: "56%",
                top: "24%",
            }}
            type="text"
            placeholder="Enter Vendor's Address"
            value={vendorAddress}
            onChange={(e) => setText3(e.target.value)}
            ></input>

            <p1 style={{ top: "36%", left: "56.5%" }}>Tags</p1>

            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                left: "56%",
                width: "35%",
                top: "44%",
            }}
            type="text"
            placeholder="Enter Vendor's Tags"
            value={vendorTags}
            onChange={(e) => setText4(e.target.value)}
            ></input>

            <p1 style={{ top: "76%", left: "8%" }}>Male</p1>
            <p1 style={{ top: "76%", left: "20%" }}>Female</p1>
            <input
            style={{
                position: "absolute",
                height: 28,
                left: "9%",
                width: "10%",
                top: "76%",
            }}
            type="checkbox"
            checked={vendorGender}
            value={vendorGender}
            onChange={(e) => setGender(e.currentTarget.checked)}
            />

            <input
            style={{
                position: "absolute",
                height: 28,
                left: "22.5%",
                width: "10%",
                top: "76%",
            }}
            type="checkbox"
            checked={vendorGender}
            value={vendorGender}
            onChange={(e) => setGender(e.currentTarget.checked)}
            />

            <p1 style={{ top: "56%", left: "56.5%" }}>Phone Number</p1>

            <input
            className="search-bar"
            style={{
                background: "#F0EBEB",
                border: 0,
                height: 28,
                left: "56%",
                width: "35%",
                top: "64%",
            }}
            type="text"
            placeholder="Enter Vendor's Phone Number"
            value={vendorNumber}
            onChange={(e) => setText6(e.target.value)}
            ></input>
        </div>
    )
}
