import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

function ChangePassword({ setBlur }) {
  const [oldPassword, setText1] = useState("");
  const [newPassword1, setText2] = useState("");
  const [newPassword2, setText3] = useState("");

  function attemptChange({ setchangePassword }) {
    alert(oldPassword + newPassword1 + newPassword2);
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
          onChange={(e) => setText1(e.target.value)}
        ></input>

        <p1 style={{ top: "33%", left: "15%" }}>New Password:</p1>

        <input
          className="inputChangePassword"
          style={{ top: "41%" }}
          type="text"
          placeholder="Enter New Password"
          value={newPassword1}
          onChange={(e) => setText2(e.target.value)}
        ></input>

        <p1 style={{ top: "51%", left: "15%" }}>Repeat New Password:</p1>

        <input
          className="inputChangePassword"
          style={{ top: "59%" }}
          type="text"
          placeholder="Repeat your new password"
          value={newPassword2}
          onChange={(e) => setText3(e.target.value)}
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
