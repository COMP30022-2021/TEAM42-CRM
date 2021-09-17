import React, { useState } from "react";

export default function SelectBox() {
  const [select, setSelect] = useState(false);

  return (
    <input
      style={{
        position: "absolute",
        width: 16,
        height: 16,
        left: 15,
        top: 13,
      }}
      type="checkbox"
      checked={select}
      value={select}
      onChange={(e) => setSelect(e.currentTarget.checked)}
    />
  );
}
