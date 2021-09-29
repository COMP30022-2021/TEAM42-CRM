import React, { useState } from "react";

export default function SelectBox() {
  const [select, setSelect] = useState(false);

  return (
    <input
      style={{
        position: "absolute",
        width: 16,
        height: 16,
        left: "2%",
        top: "40%",
        transform: "translate(-50%, -50%)",
      }}
      type="checkbox"
      checked={select}
      value={select}
      onChange={(e) => setSelect(e.currentTarget.checked)}
    />
  );
}
