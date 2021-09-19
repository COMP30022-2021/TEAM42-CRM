import React from "react";
import { Link } from "react-router-dom";
import SelectBox from "../Contacts/SelectBox";

export const RecentContact = ({ contact, index }) => {
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
      <div
        className="block"
        style={{ width: 750, left: 103, top: 120 + 50 * index }}
      >
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
        <h4 style={{ left: 285, top: 0 }}>{contact.Email}</h4>
        <h4 style={{ left: 585, top: 0 }}>{contact.Role}</h4>
      </div>
    </Link>
  );
};
