import React from "react";
import Header from "../SignIns/SignInHeader";
import { useState } from "react";
import Helmet from "react-helmet";
import { GrClose } from "react-icons/gr";


export default function AddPopUp({ setBlur }) {

    const addCustomer = () => {
        alert("Added Customer");
      };
    
    const addEmployee = () => {
    alert("Added Employee");
    };

    const addVendor = () => {
    alert("Added Vendor");
    };
    
 
  return (
    <div>
      <div className="addVisit">
        <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />

        <Header text={"Add New Contact"} top_a={"0%"} width_a={"100%"} />

        <button
          className="button2"
          onClick={() => addCustomer()}
          style={{ width: "65%", margin: 10, left: "15%", top: "22%" }}
        >
          <p>Add Customer</p>
        </button>


        <button
          className="button2"
          onClick={() => addVendor()}
          style={{ width: "65%", margin: 10, left: "15%", top: "47%" }}
        >
          <p>Add External Vendor</p>
        </button>





        <button
          className="button2"
          onClick={() => addEmployee()}
          style={{ width: "65%", margin: 10, left: "15%", top: "72%" }}
        >
          <p>Add Employee</p>
        </button>

        <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "92%", top: "2.5%" }}
          cursor="pointer"
        />

        <Header text={""} top_a={"100%"} width_a={"100%"} />
      </div>
    </div>
  );
}
