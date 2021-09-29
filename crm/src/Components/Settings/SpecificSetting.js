import React from "react";

export default function SpecificSetting({ name, icon, onClick }) {
  return (
    <div className="block" onClick={() => onClick(true)}>
      {icon}
      <p className="pSettings" style={{ left: "5%" }}>
        {name}
      </p>
    </div>
  );
}
