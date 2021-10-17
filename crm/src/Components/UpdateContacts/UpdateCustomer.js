import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import CustomerInner from "../AddContact/CustomerInner";

export default function UpdateCustomer({ setEditMode, contact }) {
  const [customerName, setName] = useState(contact.name);
  const [customerEmail, setEmail] = useState(contact.email);
  const [customerAddress, setAddress] = useState(contact.address);
  const [customerDOB, setDOB] = useState(contact.birthday.split("T")[0]);
  const [dateFirstVisit, setFirstVisit] = useState(
    contact.first_visit.split("T")[0]
  );
  const [customerPhone, setPhone] = useState(contact.phone);
  const [customerIsMale, setIsMale] = useState(contact.gender === 1);

  const properties = {
    customerName,
    setName,
    customerEmail,
    setEmail,
    customerAddress,
    setAddress,
    customerDOB,
    setDOB,
    dateFirstVisit,
    setFirstVisit,
    customerPhone,
    setPhone,
    customerIsMale,
    setIsMale,
  };
  return (
    <div className="addContact">
      <Header text={"Update Customer Contact"} top_a={"0%"} width_a={"100%"} />

      <CustomerInner values={properties} />

      <button
        className="buttonCustomer"
        style={{ width: "25%", left: "23%", top: "81%" }}
      >
        <p>Update Customer</p>
      </button>

      <button
        className="deleteButton"
        style={{ width: "25%", left: "52%", top: "81%" }}
      >
        <p>Delete Vendor Contact</p>
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

UpdateCustomer.defaultProps = {
  contact: {
    name: "",
    email: "",
    address: "",
    dob: "",
    first_visit: "",
    phoneNumber: "",
    gender: "",
  },
};
