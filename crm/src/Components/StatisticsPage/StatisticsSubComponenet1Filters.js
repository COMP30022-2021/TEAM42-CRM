import React from 'react'

export default function StatisticsSubComponenet1Filters() {
    return (
        <div className="filterBar">
            
        <div className="p3" style={{ left: "10%", top: "5%" }}>Gender:</div>
        <button className="buttonFilter" 
            style={{left: "6%", width:"40%",top:"10%"}}> 
            <p className="pText">Male</p>
        </button>
        <button className="buttonFilter"
          style={{left: "54%", width:"40%",top:"10%"}}>
          <p className="pText">Female</p>
        </button>

        <div className="p3" style={{ left: "10%", top: "25%" }}>Date:</div>
        <div className="p3" style={{ left: "10%", top: "30%" }}>From</div>
        <input style={{top:"30%",left:"26%",width:"42%"}} class="numInput" type="date" min={0}></input>
        <div className="p3" style={{ left: "71%", top: "30%" }}>to</div>
        <input style={{top:"35%",left:"10%",width:"42%"}} class="numInput" type="date" min={0}></input>
        <div className="p3" style={{ left: "54%", top: "35%" }}></div>

        </div>
      );
}
