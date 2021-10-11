import React from "react";

export default function CustomerFilterBar() {

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
        
        <div className="p3" style={{ left: "10%", top: "5%" }}>Gender:</div>

        <button
          className="buttonFilter"
          onClick={() => setMale()}
          style={{left: "6%", width:"40%",top:"10%"}}>
          <p className="pText">Male</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setFemale()}
          style={{left: "54%", width:"40%",top:"10%"}}>
          <p className="pText">Female</p>
        </button>

        <div className="p3" style={{ left: "10%", top: "25%" }}>Age:</div>
          
        <div className="p3" style={{ left: "10%", top: "30%" }}>From</div>
        
        <input style={{top:"30%",left:"24%",width:"10%"}} class="numInput" type="number" min={0}></input>
        
        <div className="p3" style={{ left: "38%", top: "30%" }}>to</div>
        
        <input style={{top:"30%",left:"44%",width:"10%"}} class="numInput" type="number" min={0}></input>

        <div className="p3" style={{ left: "58%", top: "30%" }}>years old.</div>

        <div className="p3" style={{ left: "10%", top: "38%" }}>Postcode:</div>
          
        <input style={{top:"43%",left:"10%",width:"30%"}} class="numInput" type="number" min={0}></input>

        <button
          className="buttonAdd"
          onClick={() => addPostcode()}
          style={{left: "50%", width:"40%",top:"43%",lineHeight:"13px"}}>
          <p class="pButton">Add postcode</p>
        </button>

        <div className="p3" style={{ left: "10%", top: "50%" }}>First Visit:</div>
          
        <div className="p3" style={{ left: "10%", top: "55%" }}>Between</div>

        <input style={{top:"55%",left:"30%",width:"42%"}} class="numInput" type="date" min={0}></input>

        <div className="p3" style={{ left: "10%", top: "60%" }}>and</div>

        <input style={{top:"60%",left:"20%",width:"42%"}} class="numInput" type="date" min={0}></input>
        
        </div>
      );
}
