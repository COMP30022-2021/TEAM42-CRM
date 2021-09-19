import React from "react";
import SelectBox from "./SelectBox";
import { Link } from "react-router-dom";

export const Contact = ({ contact, index }) => {
  return (
    // + "/" + contact.Name + "/" + contact.id
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
      <div className="block" style={{ left: 103, top: 120 + 50.5 * index }}>
        <SelectBox />
        <img
          src={contact.image}
          style={{
            position: "absolute",
            top: 10,
            left: 50,
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
          }}
          alt="User"
        />
        <h4 style={{ left: 85, top: 0 }}>{contact.Name}</h4>
        <h4 style={{ left: 285, top: 0 }}>{contact.Gender}</h4>
        <h4 style={{ left: 485, top: 0 }}>{contact.Role}</h4>
        <h4 style={{ left: 685, top: 0 }}>{contact.Email}</h4>
      </div>
    </Link>
  );
};
