import React from "react";

export const SideBarUser = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        style={{
          position: "absolute",
          top: 55,
          left: 11,
          borderRadius: "50%",
          width: 46,
          height: 46,
          display: "block",
        }}
        alt="User"
      />
      <h3
        style={{
          top: 46,
          left: 73,
          fontSize: "14px",
          color: "#9FBF8E",
        }}
      >
        Katrina Hofer
      </h3>
      <h3 style={{ top: 69, left: 73, fontSize: "11px" }}>k.hofer@gmail.com</h3>
    </div>
  );
};
