import React from "react";

export default function Filters() {
  return (
    <div>
      <btn className="button1" style={{ left: 960, top: 10 }}>
        <p>Add Filter</p>
      </btn>
      <btn className="button1" style={{ left: 1130, top: 10 }}>
        <p>Clear Filters</p>
      </btn>
    </div>
  );
}
