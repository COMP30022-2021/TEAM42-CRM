import React from "react";
import SelectBox from "./SelectBox";
import { Link } from "react-router-dom";

export const Contact = ({ contact, index }) => {
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
      <div className="block">
        <SelectBox />
        <img
          src={contact.image}
          style={{
            position: "absolute",
            top: "50%",
            left: "7%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4 style={{ left: "16%", top: "12%" }}>{contact.Name}</h4>
        <h4 style={{ left: "36%", top: "12%" }}>{contact.Gender}</h4>
        <h4 style={{ left: "57%", top: "12%" }}>{contact.Role}</h4>
        <h4 style={{ left: "85%", top: "12%" }}>{contact.Email}</h4>
      </div>
    </Link>
  );
};
