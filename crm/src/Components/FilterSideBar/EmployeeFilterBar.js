import React from "react";

export default function EmployeeFilterBar() {

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
            ><p className="pText">Male</p>
        </button>

        <button
          className="buttonFilter"
          onClick={() => setFemale()}
          style={{
            left: "54%", width:"40%",top:"10%"
          }}
            ><p className="pText">Female</p>
        </button>

        <p1 className="p3" style={{ left: "10%", top: "25%" }}>
          Age:
        </p1>
          
        <p1 className="p3" style={{ left: "10%", top: "30%" }}>
          From
        </p1>
        <input style={{top:"30%",left:"24%",width:"10%"}} class="numInput" type="number" min={0}></input>
        <p1 className="p3" style={{ left: "38%", top: "30%" }}>
          to
        </p1>
        <input style={{top:"30%",left:"44%",width:"10%"}} class="numInput" type="number" min={0}></input>
        <p1 className="p3" style={{ left: "58%", top: "30%" }}>
          years old.
        </p1>

        <p1 className="p3" style={{ left: "10%", top: "38%" }}>
          Postcode:
        </p1>
          
        <input style={{top:"43%",left:"10%",width:"30%"}} class="numInput" type="number" min={0}></input>

        <button
          className="buttonAdd"
          onClick={() => addPostcode()}
          style={{
            left: "50%", width:"40%",top:"43%",lineHeight:"13px"
          }}
            ><p class="pButton">Add postcode</p>
        </button>

        <p1 className="p3" style={{ left: "10%", top: "50%" }}>
        Date Joined:
        </p1>
          
        <p1 className="p3" style={{ left: "10%", top: "55%" }}>
          From
        </p1>
        <input style={{top:"55%",left:"26%",width:"42%"}} class="numInput" type="date" min={0}></input>
        <p1 className="p3" style={{ left: "71%", top: "55%" }}>
          to
        </p1>
        <input style={{top:"60%",left:"10%",width:"42%"}} class="numInput" type="date" min={0}></input>
        <p1 className="p3" style={{ left: "54%", top: "60%" }}>
          years old.
        </p1>

        </div>
      );
}
