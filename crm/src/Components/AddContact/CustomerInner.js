import React from "react";
import UploadPicture from "../UploadPicture/UploadPicture";

export default function CustomerInner({ values }) {
  return (
    <div>
      <div className="pone" style={{ top: "12%", left: "9%" }}>Profile Picture</div>
      <UploadPicture/>

      <div className="pone" style={{ top: "54%", left: "9%" }}>Name</div>
      <input
        className="addInput"
        style={{ top: "60%", left: "9%" }}
        type="text"
        placeholder="Enter Customer's Name"
        value={values.customerName}
        onChange={(e) => values.setName(e.target.value)}
      ></input>


      <div className="pone" style={{ top: "70%", left: "9%" }}>Email Address</div>

      <input
        className="addInput"
        style={{ top: "76%", left: "9%" }}
        type="text"
        placeholder="Enter Customer's Email address"
        value={values.customerEmail}
        onChange={(e) => values.setEmail(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "70%", left: "55.5%" }}>First Visit</div>

      <input
        className="addInput"
        style={{ top: "76%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={values.dateFirstVisit}
        onChange={(e) => values.setFirstVisit(e.target.value)}
      ></input> 

      <div className="pone" style={{ top: "16%", left: "55.5%" }}>Address</div>

      <input
        className="addInput"
        style={{ top: "23%", left: "55.5%" }}
        type="text"
        placeholder="Enter in form: 123 Firststreet, Melbourne VIC 3000"
        value={values.customerAddress}
        onChange={(e) => values.setAddress(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "34%", left: "55.5%" }}>Date of Birth</div>

      <input
        className="addInput"
        style={{ top: "41%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={values.customerDOB}
        onChange={(e) => values.setDOB(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "53%", left: "55.5%" }}>Phone Number</div>

      <input
        className="addInput"
        style={{ top: "59%", left: "55.5%" }}
        type="text"
        placeholder="Enter Customer's Phone Number"
        value={values.customerPhone}
        onChange={(e) => values.setPhone(e.target.value)}
      ></input>

      <div className="pone" style={{ top: "46%", left: "9%" }}>Male</div>
      <div className="pone" style={{ top: "46%", left: "18%" }}>Female</div>
      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "9%",
          width: "10%",
          top: "46%",
        }}
        type="checkbox"
        checked={values.isMale}
        value={values.isMale}
        onChange={(e) => values.setIsMale(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "20%",
          width: "10%",
          top: "46%",
        }}
        type="checkbox"
        checked={!values.isMale}
        value={!values.isMale}
        onChange={(e) => values.setIsMale(!e.currentTarget.checked)}
      />
    </div>
  );
}
