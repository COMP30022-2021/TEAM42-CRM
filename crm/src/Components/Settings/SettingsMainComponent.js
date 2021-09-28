import React from 'react'
import SpecificSetting from './SpecificSetting'

export default function SettingsMainComponent() {
    return (
        <div className="settingsDisplay">
            <div className="block">
                <p className="pSettings" style={{left:"5%", color:"black"}}> Settings page: </p>
            </div>

            <SpecificSetting name={"Change Pasword"}/>
            <SpecificSetting name={"Create new Eployee Account"}/>
            <SpecificSetting name={"Delete Employee Account"}/>
        </div>
    )
}
