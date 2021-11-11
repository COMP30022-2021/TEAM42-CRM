import React from "react";
import UpdateEmployee from "./UpdateEmployee";
import UpdateCustomer from "./UpdateCustomer";
import UpdateExternalVendor from "./UpdateExternalVendor";

export default function UpdateContact({ setEditMode, contact, type, id }) {
  return (
    <div>
      {type === "employee" && (
        <UpdateEmployee setEditMode={setEditMode} contact={contact} id={id} />
      )}
      {type === "customer" && (
        <UpdateCustomer setEditMode={setEditMode} contact={contact} id={id} />
      )}
      {type === "vendor" && (
        <UpdateExternalVendor
          setEditMode={setEditMode}
          contact={contact}
          id={id}
        />
      )}
    </div>
  );
}
