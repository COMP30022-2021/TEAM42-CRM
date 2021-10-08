import React from 'react'
import Chart from "react-google-charts";

export default function StatisticsSubComponent3({left,top}) {
    const info = {
        first: 9000,
        second: 15000,
        third: 12000,
        foourth: 10000,
    }
    const year = 2018
    return (
        <div className="statisticsDisplay" style={{left: left, top: top}}>
            <Chart
            left={"2.5%"}
            width={'91%'}
            height={'100%'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Quarter', 'Sales'],
                ['First', info.first],
                ['Second', info.second],
                ['Third', info.third],
                ['Fourth', info.foourth],
            ]}
            options={{
                // Material design options
                chart: {
                title: 'Company Performance in different quarters',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />

            <button className="addButton" style style={{top:"5%",left:"85%"}}>
                <div style={{color:"#ffffff"}}>Add Filters</div>
            </button>
            <button className="addButton" style style={{top:"16%",left:"85%"}}>
                <div style={{color:"#ffffff"}}>Clear Filters</div>
            </button>
        </div>
    )
}
