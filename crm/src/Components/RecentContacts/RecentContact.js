import React from "react";
import { Link } from "react-router-dom";
import SelectBox from "../Contacts/SelectBox";

export const RecentContact = ({ contact }) => {
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
      <div className="block" style={{ width: "80%" }}>
        <SelectBox />
        <img
          src={contact.image}
          style={{
            position: "absolute",
            top: "50%",
            left: "8%",
            borderRadius: "50%",
            width: 27,
            height: 27,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />
        <h4 style={{ left: "18%", top: "12%" }}>{contact.Name}</h4>
        <h4 style={{ left: "46%", top: "12%" }}>{contact.Email}</h4>
        <h4 style={{ left: "80%", top: "12%" }}>{contact.Role}</h4>
      </div>
    </Link>
  );
};
