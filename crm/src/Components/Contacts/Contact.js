import React from "react";
import { Link } from "react-router-dom";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";

export const Contact = ({ contact }) => {
  const image =
    contact.gender === 0
      ? contact.role === "employee"
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
      <div className="block">
        <img
          src={image}
          style={{
            position: "absolute",
            top: "50%",
            left: "3%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4
          style={{ left: "18%", top: "12%", textAlign: "left", width: "25%" }}
        >
          {contact.name}
        </h4>
        <h4 style={{ left: "27.5%", top: "12%" }}>
          {contact.gender === 1 ? "Male" : "Female"}
        </h4>
        <h4 style={{ left: "46.5%", top: "12%" }}>
          {capitalizeFirstLetter(contact.role)}
        </h4>
        <h4 style={{ left: "67%", top: "12%" }}>{contact.email}</h4>
        <h4 style={{ left: "87%", top: "12%" }}>{contact.phone}</h4>
      </div>
    </Link>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
