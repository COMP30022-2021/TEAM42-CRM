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
            left: "6%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4 style={{ left: "12%", top: "12%" }}>{contact.Name}</h4>
        <h4 style={{ left: "30%", top: "12%" }}>{contact.Gender}</h4>
        <h4 style={{ left: "49%", top: "12%" }}>{contact.Role}</h4>
        <h4 style={{ left: "70%", top: "12%" }}>{contact.Email}</h4>
        <h4 style={{ left: "88%", top: "12%" }}>{contact.Phone}</h4>
      </div>
    </Link>
  );
};
