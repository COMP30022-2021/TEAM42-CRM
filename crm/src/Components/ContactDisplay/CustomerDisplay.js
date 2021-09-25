import React from "react";
import VisitTable from "./VisitTable";
import AddVisit from "../Visits/AddVisit";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { EditContact } from "./EditContact";

export default function CustomerDisplay({ contact, setEditMode }) {
  const [blur, setBlur] = React.useState(false);
  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  const addVisit = () => {
    setBlur(true);
  };

  return (
    <div>
      <div
        className="contactDisplay"
        style={{
          filter:
            "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))" +
            (blur ? "blur(2px)" : ""),
        }}
      >
        <img src={contact.image} className="contactImage" alt="user" />

        <p1 className="contactTitle">{contact.Name}</p1>

        <p1 className="contactSubtitle">Role: Customer</p1>

        <IoIosMan
          style={{ position: "absolute", left: "15%", top: "51.25%" }}
        />
        <p1 className="p3" style={{ left: "17%", top: "51%" }}>
          {contact.Gender}{" "}
        </p1>

        <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "56%" }}
        >
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
          First Visited - {contact.FirstVisit}{" "}
        </p1>

        <button
          className="button3"
          onClick={() => nextContact()}
          style={{ left: "80%" }}
        >
          <p style={{ color: "#109CF1" }}>Next</p>
        </button>

        <button
          className="button3"
          onClick={() => previousContact()}
          style={{
            left: "8%",
          }}
        >
          <p style={{ color: "#109CF1" }}>Previous</p>
        </button>

        <button
          className="button3"
          onClick={() => addVisit()}
          style={{
            left: "44%",
            backgroundColor: "#265573",
          }}
        >
          <p>Add Visit</p>
        </button>

        <div
          style={{
            position: "absolute",
            left: "65%",
            top: "51%",
            width: "25%",
            height: "30%",
          }}
        >
          <VisitTable />
        </div>

        <p className="p8" style={{ left: "78.75%", top: "81.25%" }}>
          View Complete History
        </p>

        <EditContact setEditMode={setEditMode} />
      </div>
      {blur && <AddVisit setBlur={setBlur} />}
    </div>
  );
}
