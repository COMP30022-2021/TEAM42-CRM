import React from 'react'
import Chart from "react-google-charts";

export default function StatisticsSubComponent4({left,top}) {
    const data =[
        ['Quarter', 'ID:1', 'ID:2'],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
    ]
    
    return (
        <div className="statisticsDisplay" style={{left: left, top: top}}>
            <Chart
            width={'92%'}
            height={'100%'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                hAxis: {
                title: 'Quarter',
                },
                vAxis: {
                title: 'Number of Items sold',
                },
                series: {
                1: { curveType: 'function' },
                },
            }}
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
