import React from "react";

export default function VendorFilterBar() {

    const setMale = () => {
        alert("Male");
      };

    const setFemale = () => {
        alert("Female");
      };

      const addPostcode = () => {
        alert("Added new postcode");
      };

    return (
        <div className="filterBar">
        
        <p1 className="p3" style={{ left: "10%", top: "5%" }}>
          Gender:
        </p1>

        <button
          className="buttonFilter"
          onClick={() => setMale()}
          style={{
            left: "6%", width:"40%",top:"10%"
          }}
            ><p style={{ color: "#109CF1" }}>Male</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setFemale()}
          style={{
            left: "54%", width:"40%",top:"10%"
          }}
            ><p style={{ color: "#109CF1" }}>Female</p>
        </button>

        <p1 className="p3" style={{ left: "10%", top: "25%" }}>
          Tags:
        </p1>
          
        <input style={{top:"30%",left:"10%",width:"30%"}} class="numInput" type="text" min={0}></input>

        <button
        className="buttonAdd"
        onClick={() => addPostcode()}
        style={{
            left: "50%", width:"40%",top:"30%",lineHeight:"13px"
        }}
            ><p class="pButton">Add tag</p>
        </button>
          
        <input style={{top:"43%",left:"10%",width:"30%"}} class="numInput" type="number" min={0}></input>

        <p1 className="p3" style={{ left: "10%", top: "38%" }}>
          Postcode:
        </p1>

        <button
          className="buttonAdd"
          onClick={() => addPostcode()}
          style={{
            left: "50%", width:"40%",top:"43%",lineHeight:"13px"
          }}
            ><p class="pButton">Add postcode</p>
        </button>
        </div>
      );
}