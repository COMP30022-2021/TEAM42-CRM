import React from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import Header from "../Components/SignIns/SignInHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpBusiness() {
  const history = useHistory();
  const [businessName, setText1] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const attemptSignUp = () => {
    if (businessName === "") alert("Add Business Name");
    else if (email === "") alert("Add Business Email");
    else if (password !== repeatPassword) alert("Passwords do not match");
    else {
      fetch("https://team42-crm.herokuapp.com/business/signupbusiness", {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          email: email,
          password: password,
          name: businessName,
          dateEstablished: new Date(),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) alert(data.error);
          else {
            alert("Business Sucessfully Registered!");
            history.push("/login");
          }
        });
    }
  };

  return (
    <div style={{ background: "#265573", width: "100%", height: "100%" }}>
      <div className="signUp">
        <Helmet>
          <title>Lynk - Sign Up Your Business</title>
        </Helmet>

        <Header text={"Sign up your Business"} top_a={"0%"} width_a={"100%"} />
        <div className = "pone" style={{ top: "16%", left: "8%" }}>Business Name</div>

        <input
          className="signUpInput"
          style={{ top: "23%", left: "8%" }}
          type="text"
          placeholder="Enter Business Name"
          value={businessName}
          onChange={(e) => setText1(e.target.value)}
        />

        <div className = "pone" style={{ top: "36%", left: "8%" }}>Email Address</div>

        <input
          className="signUpInput"
          style={{ top: "43%", left: "8%" }}
          type="text"
          placeholder="Enter Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className = "pone" style={{ top: "16%", left: "56.5%" }}>Admin Password</div>
        <input
          className="signUpInput"
          style={{ left: "56%", top: "23%" }}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className = "pone" style={{ top: "36%", left: "56.5%" }}>Repeat Password</div>

        <input
          className="signUpInput"
          style={{
            left: "56%",
            top: "43%",
          }}
          type="password"
          placeholder="Enter Password Again"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <button
          className="signUpButton"
          onClick={attemptSignUp}
          style={{ left: "32%", top: "60%" }}
        >
          <p>Sign up now</p>
        </button>

        <div className = "pone"
          style={{
            top: "75%",
            left: "41%",
            color: "black",
            fontSize: 12,
          }}
        >
          Already a user?&nbsp;
        </div>

        <Link to="/login">
          <p2 style={{ top: "75%", left: "50.5%", fontSize: 12 }}>
            Back to login
          </p2>
        </Link>

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}

export default SignUpBusiness;
