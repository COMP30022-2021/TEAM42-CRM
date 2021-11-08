import React from "react";
import { Link } from "react-router-dom";
import SelectBox from "../Contacts/SelectBox";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";

export const RecentContact = ({ contact }) => {
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
      <div className="block" style={{ marginBottom: "0.25%" }}>
        <img src={image} className="recentContactImg" alt="User" />
        <h4
          style={{ left: "21%", top: "12%", textAlign: "left", width: "25%" }}
        >
          {contact.name}
        </h4>
        <h4 style={{ left: "47%", top: "12%" }}>{contact.email}</h4>
        <h4 style={{ left: "80%", top: "12%" }}>
          {capitalizeFirstLetter(contact.role)}
        </h4>
      </div>
    </Link>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
