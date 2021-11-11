import React from "react";
import UploadPicture from "../UploadPicture/UploadPicture";

export default function CustomerInner({ values, mode }) {
  const disabled = mode === "edit";

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
        placeholder="Enter Customer's Name"
        value={values.customerName}
        onChange={(e) => values.setName(e.target.value)}
        disabled={disabled}
      ></input>

      <div className="pone" style={{ top: "64%", left: "9%" }}>
        Email Address
      </div>

      <input
        className="addInput"
        style={{ top: "70%", left: "9%" }}
        type="text"
        placeholder="Enter Customer's Email address"
        value={values.customerEmail}
        onChange={(e) => values.setEmail(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "64%", left: "55.5%" }}>
        First Visit
      </div>

      <input
        className="addInput"
        style={{ top: "70%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={values.dateFirstVisit}
        onChange={(e) => values.setFirstVisit(e.target.value)}
        disabled={disabled}
      ></input>

      <div className="pone" style={{ top: "13%", left: "55.5%" }}>
        Address
      </div>

      <input
        className="addInput"
        style={{ top: "20%", left: "55.5%" }}
        type="text"
        placeholder="Enter Customer Address"
        value={values.customerAddress}
        onChange={(e) => values.setAddress(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "30%", left: "55.5%" }}>
        Date of Birth
      </div>

      <input
        className="addInput"
        style={{ top: "37%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={values.customerDOB}
        onChange={(e) => values.setDOB(e.target.value)}
        disabled={disabled}
      ></input>

      <div className="pone" style={{ top: "47%", left: "55.5%" }}>
        Phone Number
      </div>

      <input
        className="addInput"
        style={{ top: "54%", left: "55.5%" }}
        type="text"
        placeholder="Enter Customer's Phone Number"
        value={values.customerPhone}
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
        checked={values.customerIsMale}
        value={values.customerIsMale}
        onChange={(e) => values.setIsMale(e.currentTarget.checked)}
        disabled={disabled}
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
        checked={!values.customerIsMale}
        value={!values.customerIsMale}
        onChange={(e) => values.setIsMale(!e.currentTarget.checked)}
        disabled={disabled}
      />
    </div>
  );
}
