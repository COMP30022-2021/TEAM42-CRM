import React from "react";
import { ChooseContact } from "./ChooseContact";
import AddEmployee from "./AddEmployee";
import AddCustomer from "./AddCustomer";
import AddExternalVendor from "./AddExternalVendor";

export default function AddPopUp({ setBlur, initialMode }) {
  const [mode, setMode] = React.useState(initialMode);
  return (
    <div>
      {mode === 0 && <ChooseContact setBlur={setBlur} setMode={setMode} />}
      {mode === 1 && <AddEmployee setBlur={setBlur} />}
      {mode === 2 && <AddCustomer setBlur={setBlur} />}
      {mode === 3 && <AddExternalVendor setBlur={setBlur} />}
    </div>
  );
}

AddPopUp.defaultProps = {
  initialMode: 0,
};
