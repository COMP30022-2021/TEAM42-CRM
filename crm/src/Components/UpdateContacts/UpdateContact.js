import React from "react";
import UpdateEmployee from "./UpdateEmployee";
import UpdateCustomer from "./UpdateCustomer";
import UpdateExternalVendor from "./UpdateExternalVendor";

export default function UpdateContact({ setEditMode, contact }) {
  return (
    <div>
      {contact.Role === "Employee" && (
        <UpdateEmployee setEditMode={setEditMode} contact={contact} />
      )}
      {contact.Role === "Customer" && (
        <UpdateCustomer setEditMode={setEditMode} contact={contact} />
      )}
      {contact.Role === "External Vendor" && (
        <UpdateExternalVendor setEditMode={setEditMode} contact={contact} />
      )}
    </div>
  );
}
