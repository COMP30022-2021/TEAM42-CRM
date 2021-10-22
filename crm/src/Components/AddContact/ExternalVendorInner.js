import React from "react";
import UploadPicture from "../UploadPicture/UploadPicture";

export default function ExternalVendorInner({ values }) {
  console.log(values);
  return (
    <div>
      <div className="pone" style={{ top: "13%", left: "9%" }}>
        Profile Picture
      </div>
      <UploadPicture />

      <div className="pone" style={{ top: "47%", left: "9%" }}>
        Name
      </div>
      <input
        className="addInput"
        style={{ top: "54%", left: "9%" }}
        type="text"
        placeholder="Enter Vendor's Name"
        value={values.vendorName}
        onChange={(e) => values.setName(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "64%", left: "9%" }}>
        Email Address
      </div>

      <input
        className="addInput"
        style={{ top: "70%", left: "9%" }}
        type="text"
        placeholder="Enter Vendor's Email Address"
        value={values.vendorEmail}
        onChange={(e) => values.setEmail(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "64%", left: "55.5%" }}>
        Rate
      </div>

      <input
        className="addInput"
        style={{ top: "70%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Rate"
        value={values.vendorCost}
        onChange={(e) => values.setVendorCost(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "13%", left: "55.5%" }}>
        Address
      </div>

      <input
        className="addInput"
        style={{ top: "20%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendors's Address"
        value={values.vendorAddress}
        onChange={(e) => values.setAddress(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "30%", left: "55.5%" }}>
        Tags
      </div>

      <input
        className="addInput"
        style={{ top: "37%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Tags"
        value={values.vendorTags}
        onChange={(e) => values.setTags(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "47%", left: "55.5%" }}>
        Phone Number
      </div>

      <input
        className="addInput"
        style={{ top: "54%", left: "55.5%" }}
        type="text"
        placeholder="Enter Vendor's Phone Number"
        value={values.vendorPhone}
        onChange={(e) => values.setPhone(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "13%", left: "33%" }}>
        Gender
      </div>
      <div className="pone" style={{ top: "21%", left: "37%" }}>
        Male
      </div>
      <div className="pone" style={{ top: "31%", left: "37%" }}>
        Female
      </div>
      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "29%",
          width: "10%",
          top: "21%",
        }}
        type="checkbox"
        checked={values.vendorIsMale}
        value={values.vendorIsMale}
        onChange={(e) => values.setIsMale(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "29%",
          width: "10%",
          top: "31%",
        }}
        type="checkbox"
        checked={!values.vendorIsMale}
        value={!values.vendorIsMale}
        onChange={(e) => values.setIsMale(!e.currentTarget.checked)}
      />
    </div>
  );
}
