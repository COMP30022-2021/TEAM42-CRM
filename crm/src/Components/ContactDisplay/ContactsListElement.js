import React from "react";
import { Link } from "react-router-dom";

export default function ContactsListElement({ contact }) {
  return (
    <Link
      to={
        "/contacts/" +
        contact.Role.replace(/ /g, "") +
        "/" +
        contact.Name.replace(/ /g, "") +
        "/" +
        contact.id
      }
    >
      <div className="block" style={{ width: "100%" }}>
        <img
          src={contact.image}
          style={{
            position: "absolute",
            top: "50%",
            left: "12%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4
          style={{ left: "25%", top: "0%", transform: "translate(-0%, -0%)" }}
        >
          {contact.Name}
        </h4>
      </div>
    </Link>
  );
}
