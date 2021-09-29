import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

function ChangePassword({ setBlur }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function attemptChange() {
    if (oldPassword === "") alert("Add Old Password");
    else if (newPassword === "") alert("Add New Password");
    else if (repeatPassword === "") alert("Add Repeat Password");
    else if (newPassword !== repeatPassword) alert("Passwords do not match");
    else {
      console.log(localStorage.getItem("businessID"));
      console.log(localStorage.getItem("employeeID"));
      fetch("https://team42-crm.herokuapp.com/auth/change/password", {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          employeeID: localStorage.getItem("employeeID"),
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 0) {
            alert("Password changed successfully!");
            setBlur(false);
          } else alert(data.status_message);
        });
    }
  }

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="changePassword">
        <Header text={"Change Password"} top_a={"0%"} width_a={"100%"} />
        <p1 style={{ top: "15%", left: "15%" }}>Old Password:</p1>

        <input
          className="inputChangePassword"
          style={{ top: "23%" }}
          type="text"
          placeholder="Enter Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        ></input>

        <p1 style={{ top: "33%", left: "15%" }}>New Password:</p1>

        <input
          className="inputChangePassword"
          style={{ top: "41%" }}
          type="text"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>

        <p1 style={{ top: "51%", left: "15%" }}>Repeat New Password:</p1>

        <input
          className="inputChangePassword"
          style={{ top: "59%" }}
          type="text"
          placeholder="Repeat your new password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={attemptChange}
          style={{ width: "65%", margin: 10, left: "15%", top: "72%" }}
        >
          <p>Change Password</p>
        </button>

        <Header text={""} top_a={"100%"} width_a={"100%"} />

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "90%", top: "1%" }}
          cursor="pointer"
        />
      </div>
    </div>
  );
}

export default ChangePassword;
