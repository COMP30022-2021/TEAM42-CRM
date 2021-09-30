import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../Components/SignIns/SignInHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

function Login() {
  const history = useHistory();
  const [email, setText1] = useState("");
  const [password, setText2] = useState("");

  const attemptLogin = () => {
    fetch("https://team42-crm.herokuapp.com/auth/login", {
      method: "post",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("businessID", data.businessID);
          localStorage.setItem("employeeID", data.employee.employee_id);
          console.log(data.businessID, data.employee.employee_id);
          history.push("/");
        } else {
          alert(data.status_message);
        }
      });
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
        <div className = "pone" style={{ top: "16%", left: "15%" }}>Email Address</div>

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

        <div className = "pone" style={{ top: "36%", left: "15%" }}>Password</div>

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

        <div classname="ptwo" style={{ top: "53%", left: "13%" }}>Forgot Password</div>

        <button
          className="button2"
          onClick={() => attemptLogin()}
          style={{ width: "65%", margin: 10, left: "15%", top: "64%" }}
        >
          <p>Sign in</p>
        </button>

        <div classname="ptwo"
          style={{
            top: "79%",
            left: "15%",
            color: "black",
            "text-decoration-line": "None",
            "font-size": 12,
          }}
        >
          New business?
        </div>

        <Link to="/signup">
          <div classname="ptwo" style={{ top: "79%", left: "27%", "font-size": 12 }}>Sign Up</div>
        </Link>

        <Header text={""} top_a={"100%"} width_a={476.15} />
      </div>
    </div>
  );
}

export default Login;
