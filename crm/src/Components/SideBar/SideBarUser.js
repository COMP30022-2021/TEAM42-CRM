import React from "react";

import no_profile from "../../res/images/no_profile_pic.png";
import user from "../../res/images/user_cropped.jpg";

export const SideBarUser = () => {
  const image =
    localStorage.getItem("employeeName") === "Katrina Hofer"
      ? user
      : no_profile;
  return (
    <div>
      <img
        src={image}
        style={{
          position: "absolute",
          top: "15%",
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
        className="userDesign"
        style={{ top: "12.5%", left: "30%", fontSize: "14px" }}
      >
        {localStorage.getItem("employeeName")}
      </h3>
      <h3 style={{ top: "15.5%", left: "30%", fontSize: "11px" }}>
        {localStorage.getItem("employeeEmail")}
      </h3>
    </div>
  );
};
