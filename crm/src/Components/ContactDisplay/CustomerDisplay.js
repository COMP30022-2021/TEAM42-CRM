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
          position: "fixed",
        }}
      >
       <img src={contact.image} className="contactImage" alt="user" /> 

        <div className="contactTitle">{contact.Name}</div>

        <div className="contactSubtitle">Role: Customer</div>

        <IoIosMan
          style={{ position: "absolute", left: "15%", top: "51.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "51%" }}>
          {contact.Gender}{" "}
        </div>

        <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
        <div
          className="p3"
          style={{ position: "absolute", left: "17%", top: "56%" }}
        >
          {contact.Phone}{" "}
        </div>

        <MdEmail style={{ position: "absolute", left: "15%", top: "61.25%" }} />
        <div className="p3" style={{ left: "17%", top: "61%" }}>
          {contact.Email}{" "}
        </div>

        <TiLocation
          style={{ position: "absolute", left: "15%", top: "66.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "66%" }}>
          {contact.Address}{" "}
        </div>

        <FaBirthdayCake
          style={{ position: "absolute", left: "15%", top: "71.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "71%" }}>
          Born {contact.DateOfBirth}{" "}
        </div>

        <ImCalendar
          style={{ position: "absolute", left: "15%", top: "76.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "76%" }}>
          First Visited - {contact.FirstVisit}{" "}
        </div>

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
          style={{left: "8%",}}
        >
          <p className="pText">Previous</p>
        </button>

        <button
          className="addButton"
          onClick={() => addVisit()}
          style={{
            left: "44%",
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
