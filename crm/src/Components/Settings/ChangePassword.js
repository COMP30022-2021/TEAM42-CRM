import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";

function ChangePassword() {
  const [oldPassword, setText1] = useState("");
  const [newPassword1, setText2] = useState("");
  const [newPassword2, setText3] = useState("");

  function attemptChange() {
    alert(oldPassword + newPassword1 + newPassword2);
  }

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div
        style={{
          background: "#FFFCFC",
          width: 476.15,
          height: 400,
          position: "absolute",
          left: "50%",
          top: "52.5%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Header text={"Change your Password"} top_a={"0%"} width_a={476.15}/>
        <p1 style={{ top: "15%", left: "15%" }}>Old Password:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "23%",
          }}
          type="text"
          placeholder="Enter your old password"
          value={oldPassword}
          onChange={(e) => setText1(e.target.value)}
        ></input>

        <p1 style={{ top: "33%", left: "15%" }}>New Password:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "41%",
          }}
          type="text"
          placeholder="Enter your new password"
          value={newPassword1}
          onChange={(e) => setText2(e.target.value)}
        ></input>

        <p1 style={{ top: "51%", left: "15%" }}>Repeat New Password:</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "59%",
          }}
          type="text"
          placeholder="Repeat your new password"
          value={newPassword2}
          onChange={(e) => setText3(e.target.value)}
        ></input>

        <button
          className="button2"
          onClick={attemptChange}
          style={{ width: "65%", margin: 10, left: "15%", top: "68%" }}
        >
          <p>Change Password</p>
        </button>

        <p2
          style={{
            top: "83%",
            left: "15%",
            color: "black",
            "text-decoration-line": "None",
            "font-size": 10,
          }}
        >
          Finished?
        </p2>
        <p2 style={{ top: "83%", left: "28%", "font-size": 10 }}>
          Back to main page
        </p2>
        <Header text={""} top_a={"100%"} width_a={476.15}/>
      </div>
    </div>
  );
}

export default ChangePassword;
