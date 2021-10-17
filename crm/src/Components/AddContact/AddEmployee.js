import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import EmployeeInner from "./EmployeeInner";

const getDate = () => {
  const time = new Date();
  return (
    time.getFullYear() +
    "-" +
    ("0" + (time.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + time.getDate()).slice(-2)
  );
};

export default function AddEmployee({ setBlur }) {
  const date = getDate();
  const [employeeName, setName] = useState("");
  const [employeeEmail, setEmail] = useState("");
  const [employeeAddress, setAddress] = useState("");
  const [employeeDOB, setDOB] = useState(date);
  const [dateStart, setStart] = useState(date);
  const [employeePhone, setPhone] = useState("");
  const [isMale, setIsMale] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  const properties = {
    employeeName,
    setName,
    employeeEmail,
    setEmail,
    employeeAddress,
    setAddress,
    employeeDOB,
    setDOB,
    dateStart,
    setStart,
    employeePhone,
    setPhone,
    isMale,
    setIsMale,
    isManager,
    setIsManager,
    createAccount,
    setCreateAccount,
  };

  const addContact = () => {
    if (employeeName === "") alert("Add employee's Name");
    else if (employeeEmail === "") alert("Add employee's Email");
    else if (employeeAddress === "") alert("Add employee's Addres");
    else if (employeeDOB === "") alert("Add employee's DOB");
    else if (employeePhone === "") alert("Add employee's Phone Number");
    else {
      fetch("https://team42-crm.herokuapp.com/auth/register", {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          businessID: localStorage.getItem("businessID"),
          email: employeeEmail,
          name: employeeName,
          phone: employeePhone,
          address: employeeAddress,
          startDate: dateStart,
          birthday: employeeDOB,
          gender: isMale ? 1 : 0,
          isManager: isManager,
          contactOnly: !createAccount,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 0) alert("Employee Added Successfully");
          window.location.reload();
        });
    }
  };
  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header text={"Add Employee Contact"} top_a={"0%"} width_a={"100%"} />

        <EmployeeInner values={properties} />

        <button
          className="buttonCustomer"
          onClick={() => addContact()}
          style={{ width: "35%", left: "32%", top: "82%" }}
        >
          <p>Add Employee</p>
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
