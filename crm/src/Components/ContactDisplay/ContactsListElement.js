import React from "react";

export default function ContactsListElement({ contact, index }) {
  return (
    <div
      className="block"
      style={{ width: "14%", left: "5.6%", top: "" + (10 + index * 7.7) + "%" }}
    >
      <img
        src={contact.image}
        style={{
          position: "absolute",
          top: 10,
          left: "4%",
          borderRadius: "50%",
          width: 27,
          height: 27,
          display: "block",
        }}
        alt="User"
      />
      <h4 style={{ left: "25%", top: 0 }}>{contact.Name}</h4>
    </div>
  );
}
