import React from "react";
import Select from "react-select";

export const OrderDropdown = ({ value, setValue }) => {
  const options = [
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
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
      left: "70%",
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
    <div className="filterDrop" style={{ left: "17.5%" }}>
      <Select
        className="orderBy"
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
        Order:
      </p>
    </div>
  );
};
