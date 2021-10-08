import React from 'react'
import StatisticsSubComponent1 from './StatisticsSubComponent1'
import StatisticsSubComponent2 from './StatisticsSubComponent2'
import StatisticsSubComponent3 from './StatisticsSubComponent3'
import StatisticsSubComponent4 from './StatisticsSubComponent4'

export default function StatisticsMainComponent() {
    

    return (
        <div>
            <StatisticsSubComponent1 left = "7%" top="11.5%"/>
            <StatisticsSubComponent2 left = "53%" top="11.5%"/>
            <StatisticsSubComponent3 left = "7%" top="54.5%"/>
            <StatisticsSubComponent4 left = "53%" top="54.5%"/>
        </div>
    )
}
