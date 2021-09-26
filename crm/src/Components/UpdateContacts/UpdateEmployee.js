import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import { GrClose } from "react-icons/gr";


export default function UpdateEmployee({ setBlur }) {
    const [employeeName, setText1] = useState("");
    const [Email, setText2] = useState("");
    const [adress, setText3] = useState("");
    const [dateBrthday, setText4] = useState("");
    const [dateJoined, setText5] = useState("");
    const [phoneNumber,setText6] = useState("");
    const [gender, setGender] = useState(false);
  
    
    function createContact() {
      alert(employeeName + Email + dateBrthday + dateJoined +adress);
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
          <Header text={"Update Employee Contact"} top_a={"0%"} width_a={916} />
          <p1 style={{ top: "16%", left: "8%" }}>Employee Name:</p1>
  
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
            placeholder="Enter the name of your Employee"
            value={employeeName}
            onChange={(e) => setText1(e.target.value)}
          ></input>
  

          <p1 style={{ top: "36%", left: "8%" }}>Employee Email adress:</p1>
  
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
          ></input>
  
          <p1 style={{ top: "56%", left: "8%" }}>
            Date when Employee started with comapny:
          </p1>
  
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
            value={dateJoined}
            onChange={(e) => setText5(e.target.value)}
          ></input>
  
          <p1 style={{ top: "16%", left: "56.5%" }}>Employee adress:</p1>
  
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
            placeholder="Enter the Employee's adress"
            value={adress}
            onChange={(e) => setText3(e.target.value)}
          ></input>
  
          <p1 style={{ top: "36%", left: "56.5%" }}>Employee Birthday:</p1>
  
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
            placeholder="Enter the Employee's birthday"
            value={dateBrthday}
            onChange={(e) => setText4(e.target.value)}
          ></input>
  
          <p1 style={{ top: "76%", left: "8%" }}>Male:</p1>
          <p1 style={{ top: "76%", left: "20%" }}>Female:</p1>
          <input
            style={{
              position: "absolute",
              height: 28,
              left: "9%",
              width: "10%",
              top: "76%",
            }}
            type="checkbox"
            checked={gender}
            value={gender}
            onChange={(e) => setGender(e.currentTarget.checked)}
          />

         <input
            style={{
              position: "absolute",
              height: 28,
              left: "22.5%",
              width: "10%",
              top: "76%",
            }}
            type="checkbox"
            checked={gender}
            value={gender}
            onChange={(e) => setGender(e.currentTarget.checked)}
          />

          <p1 style={{ top: "56%", left: "56.5%" }}>
            Employee phone number:
          </p1>
  
          <input
            className="search-bar"
            style={{
              background: "#F0EBEB",
              border: 0,
              height: 28,
              left: "56%",
              width: "35%",
              top: "64%",
            }}
            type="text"
            placeholder="Enter the Employee's phone number"
            value={phoneNumber}
            onChange={(e) => setText6(e.target.value)}
          ></input>
  
          <button
            className="button2"
            onClick={createContact}
            style={{ width: "25%", margin: 10, left: "20%", top: "83.5%" }}
          >
            <p>Update Employee Contact</p>
          </button>

          <button
            className="button2"
            onClick={createContact}
            style={{ width: "25%", margin: 10, left: "50%", top: "83.5%" ,background: "red"}}
          >
            <p>Delete Employee Contact</p>
          </button>
  
          <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
          />  
  
          <Header text={""} top_a={"100%"} width_a={916} />  
        </div>
      </div>
    );
  }
  