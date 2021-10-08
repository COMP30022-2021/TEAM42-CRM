import React from 'react'

export default function StatisticsSubComponent1({left,top}) {
    const info = {
        Revenue: 10000,
        NumberItems: 350,
        MostSold: "Coke",
        LeastSold: "Fried chicken",
    }
    return (
        <div className="statisticsDisplay" style={{left: left, top: top}}>
            <div className="pStatsHeading" style={{left: "30%", top:"8%"}}>Key Statstics</div>

            <div className="pStatsDescription" style={{left: "10%", top:"25%"}}>Revenue generated:</div>
            <div className="pStats" style={{left: "60%", top:"25%"}}>{info.Revenue} $</div>

            <div className="pStatsDescription" style={{left: "10%", top:"45%"}}>Number of transactions:</div>
            <div className="pStats" style={{left: "60%", top:"45%"}}>{info.NumberItems}</div>

            <div className="pStatsDescription" style={{left: "10%", top:"65%"}}>Most sold item:</div>
            <div className="pStats" style={{left: "60%", top:"65%"}}>{info.MostSold}</div>

            <div className="pStatsDescription" style={{left: "10%", top:"85%"}}>Least sold item:</div>
            <div className="pStats" style={{left: "60%", top:"85%"}}>{info.LeastSold}</div>

            <button className="addButton" style style={{top:"5%",left:"85%"}}>
                <div style={{color:"#ffffff"}}>Add Filters</div>
            </button>
            <button className="addButton" style style={{top:"16%",left:"85%"}}>
                <div style={{color:"#ffffff"}}>Clear Filters</div>
            </button>
        </div>
    )  
}
