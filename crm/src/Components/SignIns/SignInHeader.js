import React from "react";

function Header({ text, top_a, width_a }) {
  return (
    <div>
      <h2
        style={{
          position: "absolute",
          left: "50%",
          top: top_a,
          width: width_a,
          height: 54.85,
          transform: "translate(-50%, -50%)",
          textAlign:"center"
        }}
      >
        {text}
      </h2>
    </div>
  );
}

export default Header;
