import React from "react";
import SelectBox from "./SelectBox";
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
        <SelectBox />
        <img
          src={image}
          style={{
            position: "absolute",
            top: "50%",
            left: "6%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4 style={{ left: "14%", top: "12%" }}>{contact.name}</h4>
        <h4 style={{ left: "30%", top: "12%" }}>
          {contact.gender === 1 ? "Male" : "Female"}
        </h4>
        <h4 style={{ left: "49%", top: "12%" }}>
          {capitalizeFirstLetter(contact.role)}
        </h4>
        <h4 style={{ left: "70%", top: "12%" }}>{contact.email}</h4>
        <h4 style={{ left: "88%", top: "12%" }}>{contact.phone}</h4>
      </div>
    </Link>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
