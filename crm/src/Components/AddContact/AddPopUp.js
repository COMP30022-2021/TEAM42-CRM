import React from "react";
import { ChooseContact } from "./ChooseContact";
import AddEmployee from "./AddEmployee";
import AddCustomer from "./AddCustomer";
import AddExternalVendor from "./AddExternalVendor";

export default function AddPopUp({ setBlur, initialMode, contact }) {
  const [mode, setMode] = React.useState(initialMode);
  return (
    <div>
      {mode === "" && <ChooseContact setBlur={setBlur} setMode={setMode} />}
      {mode === "Employee" && (
        <AddEmployee setBlur={setBlur} contact={contact} />
      )}
      {mode === "Customer" && (
        <AddCustomer setBlur={setBlur} contact={contact} />
      )}
      {mode === "External Vendor" && (
        <AddExternalVendor setBlur={setBlur} contact={contact} />
      )}
    </div>
  );
}

AddPopUp.defaultProps = {
  initialMode: "",
};
