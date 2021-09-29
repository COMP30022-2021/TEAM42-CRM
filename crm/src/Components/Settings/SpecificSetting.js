import React from 'react'

export default function SpecificSetting({name}) {
    return (
        <div className="block">
            <p className="pSettings" style={{left:"5%"}}> {name} </p>
        </div>
    )
}