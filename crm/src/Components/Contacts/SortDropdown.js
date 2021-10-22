import React from "react";
import Select from "react-select";

export const SortDropdown = ({ value, setValue }) => {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Gender", label: "Gender" },
    { value: "Role", label: "Role" },
    { value: "Email", label: "Email" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: "0px solid black",
      fontSize: 13,
      backgroundColor: "transparent",
      outline: "none",
      boxShadow: "none",
      "&:hover": {
        border: "0px solid black",
      },
      color: "#2a8dbb",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: "#3366BB",
      position: "absolute",
      left: "60%",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    option: (styles, state) => {
      return {
        ...styles,
        fontSize: 11,
      };
    },
    singleValue: (provided) => ({
      ...provided,
      color: "#3366BB",
    }),
  };

  return (
    <div className="filterDrop">
      <Select
        className="dropdown"
        components={{ IndicatorSeparator: () => null }}
        menuPortalTarget={document.body}
        styles={colourStyles}
        options={options}
        onChange={(e) => {
          setValue(e);
        }}
        value={value}
        placeholder="Select an option"
      />
      <p
        style={{
          position: "absolute",
          left: "0%",
          top: "-10%",
          color: "#000000",
        }}
      >
        Sort By:
      </p>
    </div>
  );
};
