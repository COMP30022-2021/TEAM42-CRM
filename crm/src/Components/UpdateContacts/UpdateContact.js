import React from "react";
import UpdateEmployee from "./UpdateEmployee";
import UpdateCustomer from "./UpdateCustomer";
import UpdateExternalVendor from "./UpdateExternalVendor";

export default function UpdateContact({ setEditMode, contact, type }) {
  return (
    <div>
      {type === "employee" && (
        <UpdateEmployee setEditMode={setEditMode} contact={contact} />
      )}
      {type === "customer" && (
        <UpdateCustomer setEditMode={setEditMode} contact={contact} />
      )}
      {type === "vendor" && (
        <UpdateExternalVendor setEditMode={setEditMode} contact={contact} />
      )}
    </div>
  );
}
