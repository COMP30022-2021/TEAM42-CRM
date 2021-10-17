import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import EmployeeInner from "../AddContact/EmployeeInner";

export default function UpdateEmployee({ setEditMode, contact }) {
  const [employeeName, setName] = useState(contact.name);
  const [employeeEmail, setEmail] = useState(contact.email);
  const [employeeAddress, setAddress] = useState(contact.address);
  const [employeeDOB, setDOB] = useState(contact.birthday.slice(0, 10));
  const [dateStart, setStart] = useState(contact.date_joined.slice(0, 10));
  const [employeePhone, setPhone] = useState(contact.phone);
  const [isMale, setIsMale] = useState(contact.gender === 1);
  const [isManager, setIsManager] = useState(contact.Role === "Manager");
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

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="addContact">
        <Header
          text={"Update Employee Contact"}
          top_a={"0%"}
          width_a={"100%"}
        />

        <EmployeeInner values={properties} />

        <button
          className="buttonCustomer"
          style={{ width: "25%", left: "20%", top: "83.5%" }}
        >
          <p>Update Employee</p>
        </button>

        <button
          className="deleteButton"
          style={{ width: "25%", left: "50%", top: "83.5%" }}
        >
          <p>Delete Employee</p>
        </button>

        <GrClose
          onClick={() => setEditMode(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}

UpdateEmployee.defaultProps = {
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
