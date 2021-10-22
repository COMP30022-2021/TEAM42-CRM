import React from "react";
import Select from "react-select";

export const SearchOn = ({ value, setValue, width }) => {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
  ];

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    option: (styles, state) => {
      return {
        ...styles,
        fontSize: 11,
      };
    },
  };

  return (
    <div style={{ left: "12%", zIndex: 5, width: width }} className="searchOn">
      <Select
        className="searchOnDropdown"
        menuPortalTarget={document.body}
        styles={colourStyles}
        options={options}
        onChange={(e) => {
          setValue(e);
        }}
        value={value}
        placeholder="Select an option"
      />
    </div>
  );
};
