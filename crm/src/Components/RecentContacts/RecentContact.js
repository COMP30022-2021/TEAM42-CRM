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
      <div className="block">
        <SelectBox />
        <img src={image} className="recentContactImg" alt="User" />
        <h4 style={{ left: "20%", top: "12%" }}>{contact.name}</h4>
        <h4 style={{ left: "50%", top: "12%" }}>{contact.email}</h4>
        <h4 style={{ left: "82%", top: "12%" }}>
          {capitalizeFirstLetter(contact.role)}
        </h4>
      </div>
    </Link>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
