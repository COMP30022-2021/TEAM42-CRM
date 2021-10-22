import React from "react";
import { Link } from "react-router-dom";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";
import moffat from "../../res/images/moffat.jpg";
import leon from "../../res/images/leon_sterling.jfif";
export default function ContactsListElement({ contact }) {
  const image =
    contact.name === "Alistair Moffat"
      ? moffat
      : contact.name === "Leon Sterling"
      ? leon
      : contact.gender === 0
      ? contact.role === "Employee"
        ? employee
        : customer
      : vendor;
  return (
    <Link
      to={
        "/contacts/" +
        contact.role.replace(/ /g, "") +
        "/" +
        contact.name.replace(/ /g, "") +
        "/" +
        contact.id
      }
    >
      <div className="block" style={{ marginBottom: "0.6%" }}>
        <img
          src={image}
          style={{
            position: "absolute",
            top: "50%",
            left: "12%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4
          style={{
            left: "25%",
            top: "0%",
            transform: "translate(-0%, -0%)",
            width: "70%",
            textAlign: "left",
          }}
        >
          {contact.name}
        </h4>
      </div>
    </Link>
  );
}
