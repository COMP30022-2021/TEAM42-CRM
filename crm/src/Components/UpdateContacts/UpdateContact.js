import React from "react";
import UpdateEmployee from "./UpdateEmployee";
import UpdateCustomer from "./UpdateCustomer";
import UpdateExternalVendor from "./UpdateExternalVendor";

export default function UpdateContact({ setEditMode, contact }) {
  return (
    <div>
      {contact.role === "Employee" && (
        <UpdateEmployee setEditMode={setEditMode} contact={contact} />
      )}
      {contact.role === "Customer" && (
        <UpdateCustomer setEditMode={setEditMode} contact={contact} />
      )}
      {contact.role === "External Vendor" && (
        <UpdateExternalVendor setEditMode={setEditMode} contact={contact} />
      )}
    </div>
  );
}
