import React from "react";

export default function EmployeeInner({ values }) {
  return (
    <div>
      <p1 style={{ top: "16%", left: "9%" }}>Name</p1>
      <input
        className="addInput"
        style={{ top: "23%", left: "9%" }}
        type="text"
        placeholder="Enter employee's Name"
        value={values.employeeName}
        onChange={(e) => values.setName(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "9%" }}>Email Address</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "9%" }}
        type="text"
        placeholder="Enter employee's Email address"
        value={values.employeeEmail}
        onChange={(e) => values.setEmail(e.target.value)}
      ></input>

      <p1 style={{ top: "52%", left: "9%" }}>Start Date</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "9%" }}
        type="date"
        placeholder=""
        value={values.dateStart}
        onChange={(e) => values.setStart(e.target.value)}
      ></input>

      <p1 style={{ top: "16%", left: "55.5%" }}>Address</p1>

      <input
        className="addInput"
        style={{ top: "23%", left: "55.5%" }}
        type="text"
        placeholder="Enter employee's Address"
        value={values.employeeAddress}
        onChange={(e) => values.setAddress(e.target.value)}
      ></input>

      <p1 style={{ top: "34%", left: "55.5%" }}>Date of Birth</p1>

      <input
        className="addInput"
        style={{ top: "41%", left: "55.5%" }}
        type="date"
        placeholder=""
        value={values.employeeDOB}
        onChange={(e) => values.setDOB(e.target.value)}
      ></input>

      <p1 style={{ top: "53%", left: "55.5%" }}>Phone Number</p1>

      <input
        className="addInput"
        style={{ top: "59%", left: "55.5%" }}
        type="text"
        placeholder="Enter employee's Phone Number"
        value={values.employeePhone}
        onChange={(e) => values.setPhone(e.target.value)}
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
        checked={values.isMale}
        value={values.isMale}
        onChange={(e) => values.setIsMale(e.currentTarget.checked)}
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
        checked={!values.isMale}
        value={!values.isMale}
        onChange={(e) => values.setIsMale(!e.currentTarget.checked)}
      />

      <p1 style={{ top: "70%", left: "55.5%" }}>Is Manager?</p1>
      <p1 style={{ top: "70%", left: "74%" }}>Create Account?</p1>
      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "62%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={values.isManager}
        value={values.isManager}
        onChange={(e) => values.setIsManager(e.currentTarget.checked)}
      />

      <input
        style={{
          position: "absolute",
          height: "5%",
          left: "84%",
          width: "10%",
          top: "70%",
        }}
        type="checkbox"
        checked={values.createAccount}
        value={values.createAccount}
        onChange={(e) => values.setCreateAccount(e.currentTarget.checked)}
      />
    </div>
  );
}
