import React, {useEffect} from "react";

import Header from "../Components/SignIns/SignInHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

function Login({ setLogIn }) {
  const [email, setText1] = useState("");
  const [password, setText2] = useState("");

  const attemptLogin = () => {
    console.log(email);
    console.log(password);
    const newPassword = password.toString();
    fetch("https://team42-crm.herokuapp.com/auth/login", {
      method: "post",
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify({
        email: email,
        password: newPassword,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // useEffect(() => {
  //
  // }, []);

  return (
    <div>
      <div
        className="logInBox"
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
        <Helmet>
          <title>Lynk - Login</title>
        </Helmet>
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Sign in"} top_a={"0%"} width_a={476.15} />
        <p1 style={{ top: "16%", left: "15%" }}>Email Address</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "24%",
          }}
          type="text"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setText1(e.target.value)}
        />

        <p1 style={{ top: "36%", left: "15%" }}>Password</p1>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "70%",
            top: "44%",
          }}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setText2(e.target.value)}
        />

        <p2 style={{ top: "53%", left: "13%" }}>Forgot Password</p2>

        <Link to="/">
          <button
            className="button2"
            onClick={() => attemptLogin()}
            style={{ width: "65%", margin: 10, left: "15%", top: "64%" }}
          >
            <p>Sign in</p>
          </button>
        </Link>

        <p2
          style={{
            top: "79%",
            left: "15%",
            color: "black",
            "text-decoration-line": "None",
            "font-size": 12,
          }}
        >
          New business?
        </p2>

        <Link to="/signup">
          <p2 style={{ top: "79%", left: "27%", "font-size": 12 }}>Sign Up</p2>
        </Link>

        <Header text={""} top_a={"100%"} width_a={476.15} />
      </div>
    </div>
  );
}

export default Login;
