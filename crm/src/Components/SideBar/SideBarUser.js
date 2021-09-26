import React from "react";

export const SideBarUser = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        style={{
          position: "absolute",
          top: "12%",
          left: "13.8%",
          borderRadius: "50%",
          width: 46,
          height: 46,
          display: "block",
          transform: "translate(-50%, -50%)",
        }}
        alt="User"
      />
      <h3
        style={{
          top: "7.5%",
          left: "30%",
          fontSize: "14px",
          color: "#9FBF8E",
        }}
      >
        Katrina Hofer
      </h3>
      <h3 style={{ top: "10.5%", left: "30%", fontSize: "11px" }}>
        k.hofer@gmail.com
      </h3>
    </div>
  );
};
