import React from 'react'
import Header from "../Components/SignIns/SignInHeader";
import { useState } from "react";

function SignUpBusiness() {
    const [businessName, setText1] = useState("");
    const [Email, setText2] = useState("");
    const [password1, setText3] = useState("");
    const [password2, setText4] = useState("");
  
    function attemptLogin() {
      alert(businessName + Email + password1+password2);
    }
  
    return (
      <div style={{ background: "#265573", width: "100%", height: "100%" }}>
        <div
          style={{
            background: "#FFFCFC",
            width: 916,
            height: 524,
            position: "absolute",
            left: "50%",
            top: "52.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
  <Header text={"Sign up your Business"} top_a={"0%"} width_a ={916}/>
  <p1 style={{ top: "16%", left: "8%" }}>Business Name:</p1>

  <input
    className="search-bar"
    style={{
      background: "#F0EBEB",
      border: 0,
      height: 28,
      width: "35%",
      top: "24%",
    }}
    type="text"
    placeholder="Enter the name of your business"
    value={businessName}
    onChange={(e) => setText1(e.target.value)}
  ></input>

  <p1 style={{ top: "36%", left: "8%" }}>Admin Email adress:</p1>

  <input
    className="search-bar"
    style={{
      background: "#F0EBEB",
      border: 0,
      height: 28,
      width: "35%",
      top: "44%",
    }}
    type="text"
    placeholder="Enter the Email adress of the admin"
    value={Email}
    onChange={(e) => setText2(e.target.value)}
  ></input>

  <p1 style={{ top: "16%", left: "56.5%" }}>Admin Password:</p1>
  
  <input
    className="search-bar"
    style={{
      background: "#F0EBEB",
      border: 0,
      height: 28,
      width: "35%",
      left:"56%",
      top: "24%",
    }}
    type="text"
    placeholder="Enter the admin password"
    value={password1}
    onChange={(e) => setText3(e.target.value)}
  ></input>

  <p1 style={{ top: "36%", left: "56.5%" }}>Repeat Admin Password:</p1>

  <input
    className="search-bar"
    style={{
      background: "#F0EBEB",
      border: 0,
      height: 28,
      left:"56%",
      width: "35%",
      top: "44%",
    }}
    type="text"
    placeholder="Repeat the admin password"
    value={password2}
    onChange={(e) => setText4(e.target.value)}
  ></input>
  
    <button
      className="button2"
      onClick={attemptLogin}
      style={{ width: "35%", margin: 10, left: "32%", top: "56%" }}
    >
      <p>Sign up now</p>
    </button>

    <p2
      style={{
        top: "70%",
        left: "41%",
        color: "black",
        "text-decoration-line": "None",
        "font-size": 10,
      }}
    >
      Already a user?
    </p2>
    <p2 style={{ top: "70%", left: "48%", "font-size": 10 }}>Back to login</p2>

    <Header text={""} top_a={"100%"} />
  </div>
</div>
    );
  }

export default SignUpBusiness
