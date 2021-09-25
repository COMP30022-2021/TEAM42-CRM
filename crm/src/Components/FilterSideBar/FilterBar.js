import React from "react";

export default function FilterBar() {

    const setMale = () => {
        alert("Male");
      };

    const setFemale = () => {
        alert("Female");
      };

    const setCustomer = () => {
      alert("Customer");
    };

    const setEmployee = () => {
      alert("Employee");
    };

    const setVendor = () => {
      alert("Venodr");
    };
      
    const addPostcode = () => {
      alert("Added new postcode");
    };

    return (
        <div className="filterBar">

        <p1 className="p3" style={{ left: "10%", top: "5%" }}>
          Role:
        </p1>

        <button
          className="buttonFilter"
          onClick={() => setCustomer()}
          style={{
            left: "3%", width:"30%",top:"10%"
          }}
            ><p style={{ color: "#109CF1" }}>Customer</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setEmployee()}
          style={{
            left: "35%", width:"30%",top:"10%"
          }}
            ><p style={{ color: "#109CF1" }}>Employee</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setVendor()}
          style={{
            left: "66%", width:"30%",top:"10%"
          }}
            ><p style={{ color: "#109CF1" }}>Vendor</p>
        </button>
        
        <p1 className="p3" style={{ left: "10%", top: "22%" }}>
          Gender:
        </p1>

        <button
          className="buttonFilter"
          onClick={() => setMale()}
          style={{
            left: "6%", width:"40%",top:"27%"
          }}
            ><p style={{ color: "#109CF1" }}>Male</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setFemale()}
          style={{
            left: "54%", width:"40%",top:"27%"
          }}
            ><p style={{ color: "#109CF1" }}>Female</p>
        </button>

        <p1 className="p3" style={{ left: "10%", top: "40%" }}>
          Postcode:
        </p1>
          
        <input style={{top:"45%",left:"10%",width:"30%"}} class="numInput" type="number" min={0}></input>

        <button
          className="buttonAdd"
          onClick={() => addPostcode()}
          style={{
            left: "50%", width:"40%",top:"45%",lineHeight:"13px"
          }}
            ><p class="pButton">Add postcode</p>
        </button>

        </div>
      );
}
