import React from "react";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { EditContact } from "./EditContact";

export default function EmployeeDisplay({ contact, setEditMode }) {
  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  return (
    <div className="contactDisplay">
      <img src={contact.image} className="contactImage" alt="user" />

      <p1 className="contactTitle">{contact.Name}</p1>

      <p1 className="contactSubtitle">Role: {contact.Role}</p1>

      <IoIosMan style={{ position: "absolute", left: "15%", top: "51.25%" }} />
      <p1 className="p3" style={{ left: "17%", top: "51%" }}>
        {contact.Gender}{" "}
      </p1>

      <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
      <p1 className="p3" style={{ left: "17%", top: "56%" }}>
        {contact.Phone}{" "}
      </p1>

      <MdEmail style={{ position: "absolute", left: "15%", top: "61.25%" }} />
      <p1 className="p3" style={{ left: "17%", top: "61%" }}>
        {contact.Email}{" "}
      </p1>

      <TiLocation
        style={{ position: "absolute", left: "15%", top: "66.25%" }}
      />
      <p1 className="p3" style={{ left: "17%", top: "66%" }}>
        {contact.Address}{" "}
      </p1>

      <FaBirthdayCake
        style={{ position: "absolute", left: "15%", top: "71.25%" }}
      />
      <p1 className="p3" style={{ left: "17%", top: "71%" }}>
        Born {contact.DateOfBirth}{" "}
      </p1>

      <ImCalendar
        style={{ position: "absolute", left: "15%", top: "76.25%" }}
      />
      <p1 className="p3" style={{ left: "17%", top: "76%" }}>
        Joined {contact.DateJoined}{" "}
      </p1>

      <button
        className="button3"
        onClick={() => nextContact()}
        style={{ left: "80%" }}
      >
        <p className="pText">Next</p>
      </button>

      <button
        className="button3"
        onClick={() => previousContact()}
        style={{
          left: "8%",
        }}
      >
        <p className="pText">Previous</p>
      </button>

      <EditContact setEditMode={setEditMode} />
    </div>
  );
}