import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import CustomerInner from "../AddContact/CustomerInner";

import { useHistory } from "react-router-dom";

export default function UpdateCustomer({ setEditMode, contact, id }) {
  const history = useHistory();

  const [customerName, setName] = useState(contact.name);
  const [customerEmail, setEmail] = useState(contact.email);
  const [customerAddress, setAddress] = useState(contact.address);
  const [customerDOB, setDOB] = useState(contact.birthday);
  const [dateFirstVisit, setFirstVisit] = useState(contact.first_visit);
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

  const handleDelete = () => {
    fetch(
      "https://team42-crm.herokuapp.com/customer/delete/" +
        contact.customer_id +
        "?businessID=" +
        localStorage.getItem("businessID"),
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          alert("Contact Deleted");
          history.push("/contacts/all/all");
        } else {
          alert(data.status_message);
        }
      });
  };

  const handleUpdate = () => {
    fetch("https://team42-crm.herokuapp.com/customer/update/", {
      method: "post",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        businessID: localStorage.getItem("businessID"),
        email: customerEmail,
        phone: customerPhone,
        address: customerAddress,
        customerID: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          console.log(data);
          window.location.reload();
        } else {
          alert(data.status_message);
        }
      });
  };

  return (
    <div className="addContact">
      <Header text={"Update Customer Contact"} top_a={"0%"} width_a={"100%"} />

      <CustomerInner values={properties} mode={"edit"} />

      <button
        className="buttonCustomer"
        style={{ width: "25%", left: "23%", top: "81%" }}
        onClick={() => handleUpdate()}
      >
        <p>Update Contact</p>
      </button>

      <button
        className="deleteButton"
        style={{ width: "25%", left: "52%", top: "81%" }}
        onClick={handleDelete}
      >
        <p>Delete Contact</p>
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
