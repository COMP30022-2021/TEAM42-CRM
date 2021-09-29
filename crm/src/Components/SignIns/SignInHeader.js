import React from "react";

function Header({ text, top_a, width_a }) {
  return (
    <div className="header" style={{ top: top_a, width: width_a }}>
      <h2>{text}</h2>
    </div>
  );
}

export default Header;
