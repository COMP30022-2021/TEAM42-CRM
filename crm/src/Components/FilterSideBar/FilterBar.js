import React from "react";

export default function FilterBar() {
  return (
    <div className="filterBar">
      <div className="p3" style={{ left: "10%", top: "5%" }}>
        Gender:
      </div>

      <button
        className="buttonFilter"
        style={{left: "6%",width: "40%",top: "10%",}}>
        <p className="pText">Male</p>
      </button>

      <button
        className="buttonFilter"
        style={{left: "54%",width: "40%",top: "10%",}}
      >
        <p className="pText">Female</p>
      </button>

      <div className="p3" style={{ left: "10%", top: "25%" }}>
        Postcode:
      </div>

      <input
        style={{ top: "30%", left: "10%", width: "30%" }}
        class="numInput"
        type="number"
        min={0}
      ></input>

      <button
        className="buttonAdd"
        style={{left: "50%",width: "40%",top: "30%",lineHeight: "13px",
        }}
      >
        <p class="pButton">Add postcode</p>
      </button>
    </div>
  );

}