import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export const LoginBox = () => {
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
          console.log(data);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("businessID", data.businessID);
          localStorage.setItem("employeeID", data.employee.employee_id);
          localStorage.setItem("employeeName", data.employee.name);
          localStorage.setItem("employeeEmail", data.employee.email);
          localStorage.setItem("employeeRole", data.employee.role);
          history.push("/");
        } else {
          alert(data.status_message);
        }
      });
  };

  const forgetPassword = () => {
    fetch("http://team42-crm.herokuapp.com/auth/reset/" + email, {
      method: "get",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status_code === 0) {
          setText1("");
        } else {
          alert(data.status_message);
        }
      });
  };

  return (
    <div>
      <div className="logInBox">
        <Helmet>
          <title>Lynk - Login</title>
        </Helmet>

        <Header text={"Sign in"} top_a={"0%"} width_a={"100%"} />

        <input
          className="inputLogIn"
          style={{ top: "24%" }}
          type="text"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setText1(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              attemptLogin();
            }
          }}
        />

        <input
          className="inputLogIn"
          style={{ top: "44%" }}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setText2(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              attemptLogin();
            }
          }}
        />

        <div
          className="ptwo"
          style={{ top: "60%", left: "17%", fontSize: 13, cursor: "pointer" }}
          onClick={() => forgetPassword()}
        >
          Forgot Password
        </div>

        <button
          className="button2"
          onClick={() => attemptLogin()}
          style={{ width: "65%", margin: 10, left: "15%", top: "70%" }}
        >
          <p>Sign in</p>
        </button>

        <div
          className="ptwo"
          style={{
            top: "85%",
            left: "15%",
            color: "black",
            "text-decoration-line": "None",
            "font-size": 12,
          }}
        >
          New business?
        </div>

        <Link to="/signup">
          <div
            className="ptwo"
            style={{ top: "85%", left: "31.5%", "font-size": 12 }}
          >
            Sign Up
          </div>
        </Link>

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
};
