import React from "react";
import Header from "../Components/SignIns/SignInHeader";
import { useState } from "react";

export default function CreateEmployeeAccounts() {
  const [employeeName, setText1] = useState("");
  const [Email, setText2] = useState("");
  const [password1, setText3] = useState("");
  const [password2, setText4] = useState("");
  const [date, setText5] = useState("");
  const [manager, setManager] = useState(false);

  function attemptLogin() {
    alert(employeeName + Email + password1 + password2);
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
        <Header text={"CreateEmployeeAccounts"} top_a={"0%"} width_a={916} />
        <div className="pone" style={{ top: "16%", left: "8%" }}>Employee Name:</div>

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
          placeholder="Enter the name of your employee"
          value={employeeName}
          onChange={(e) => setText1(e.target.value)}
        />

        <div className="pone" style={{ top: "36%", left: "8%" }}>Employee Email adress:</div>

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
          placeholder="Enter the Email adress of the Employee"
          value={Email}
          onChange={(e) => setText2(e.target.value)}
        />

        <div className="pone" style={{ top: "56%", left: "8%" }}>
          Date when Employee started with comapny:
        </div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "35%",
            top: "64%",
          }}
          type="text"
          placeholder="Enter the date when the Employee started"
          value={date}
          onChange={(e) => setText5(e.target.value)}
        />

        <div className="pone" style={{ top: "16%", left: "56.5%" }}>Employee Password:</div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "35%",
            left: "56%",
            top: "24%",
          }}
          type="text"
          placeholder="Enter the employee password"
          value={password1}
          onChange={(e) => setText3(e.target.value)}
        />

        <div className="pone" style={{ top: "36%", left: "56.5%" }}>Repeat Employee Password:</div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            left: "56%",
            width: "35%",
            top: "44%",
          }}
          type="text"
          placeholder="Repeat the employee password"
          value={password2}
          onChange={(e) => setText4(e.target.value)}
        />

        <div className="pone" style={{ top: "56%", left: "56.5%" }}>Manager privaliges:</div>

        <input
          style={{
            position: "absolute",
            height: 28,
            left: "55%",
            width: "35%",
            top: "56%",
          }}
          type="checkbox"
          checked={manager}
          value={manager}
          onChange={(e) => setManager(e.currentTarget.checked)}
        />

        <button
          className="button2"
          onClick={attemptLogin}
          style={{ width: "35%", margin: 10, left: "32%", top: "72%" }}
        />

        <Header text={"CreateEmployeeAccounts"} top_a={"0%"} width_a={916} />
        <div className="pone" style={{ top: "16%", left: "8%" }}>Employee Name:</div>

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
          placeholder="Enter the name of your employee"
          value={employeeName}
          onChange={(e) => setText1(e.target.value)}
        />

        <div className="pone" style={{ top: "36%", left: "8%" }}>Employee Email adress:</div>

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
          placeholder="Enter the Email adress of the Employee"
          value={Email}
          onChange={(e) => setText2(e.target.value)}
        />

        <div className="pone" style={{ top: "56%", left: "8%" }}>
          Date when Employee started with comapny:
        </div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "35%",
            top: "64%",
          }}
          type="text"
          placeholder="Enter the date when the Employee started"
          value={date}
          onChange={(e) => setText5(e.target.value)}
        />

        <div className="pone" style={{ top: "16%", left: "56.5%" }}>Employee Password:</div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            width: "35%",
            left: "56%",
            top: "24%",
          }}
          type="text"
          placeholder="Enter the employee password"
          value={password1}
          onChange={(e) => setText3(e.target.value)}
        />

        <div className="pone" style={{ top: "36%", left: "56.5%" }}>Repeat Employee Password:</div>

        <input
          className="search-bar"
          style={{
            background: "#F0EBEB",
            border: 0,
            height: 28,
            left: "56%",
            width: "35%",
            top: "44%",
          }}
          type="text"
          placeholder="Repeat the employee password"
          value={password2}
          onChange={(e) => setText4(e.target.value)}
        />

        <div className="pone" style={{ top: "56%", left: "56.5%" }}>Manager privaliges:</div>

        <input
          style={{
            position: "absolute",
            height: 28,
            left: "55%",
            width: "35%",
            top: "56%",
          }}
          type="checkbox"
          checked={manager}
          value={manager}
          onChange={(e) => setManager(e.currentTarget.checked)}
        />

        <button
          className="button2"
          onClick={attemptLogin}
          style={{ width: "35%", margin: 10, left: "32%", top: "72%" }}
        >
          <p>Create Employee Account</p>
        </button>

        <p2
          style={{
            top: "84%",
            left: "41%",
            color: "black",
            "text-decoration-line": "None",
            "font-size": 10,
          }}
        >
          Finished?
        </p2>
        <p2 style={{ top: "84%", left: "48%", "font-size": 10 }}>
          Back to main page
        </p2>

        <Header text={""} top_a={"100%"} />
      </div>
    </div>
  );
}
