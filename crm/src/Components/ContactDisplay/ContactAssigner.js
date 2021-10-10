import React from "react";

import CustomerDisplay from "./CustomerDisplay";
import ExternalVendorDisplay from "./ExternalVendorDisplay";
import EmployeeDisplay from "./EmployeeDisplay";

export const ContactAssigner = ({ contact, setEditMode, role }) => {
  return role === "employee" ? (
    <EmployeeDisplay contact={contact} setEditMode={setEditMode} />
  ) : role === "customer" ? (
    <CustomerDisplay contact={contact} setEditMode={setEditMode} />
  ) : (
    <ExternalVendorDisplay contact={contact} setEditMode={setEditMode} />
  );
};
