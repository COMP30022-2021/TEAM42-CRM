import React from "react";
import VisitTable from "./VisitTable";
import AddVisit from "../Visits/AddVisit";
import VisitCompleteHistory from "../Visits/VisitsCompleteHistory";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { EditContact } from "./EditContact";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";

export default function CustomerDisplay({ contact, setEditMode }) {
  const [addVisit, setAddVisit] = React.useState(false);
  const [visitHistory, setVisitHistory] = React.useState(false);

  const blurred = addVisit || visitHistory;
  const image =
    contact.gender === 0
      ? contact.role === "employee"
        ? employee
        : customer
      : vendor;

  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  return (
    <div>
      <div
        className="contactDisplay"
        style={{
          filter:
            "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))" +
            (blurred ? "blur(2px)" : ""),
          position: "fixed",
        }}
      >
        <img src={image} className="contactImage" alt="user" />

        <div className="contactTitle">{contact.name}</div>

        <div className="contactSubtitle">Role: Customer</div>

        <IoIosMan
          style={{ position: "absolute", left: "15%", top: "51.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "51%" }}>
          {contact.gender === 1 ? "Male" : "Female"}
        </div>

        <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
        <div
          className="p3"
          style={{ position: "absolute", left: "17%", top: "56%" }}
        >
          {contact.phone}
        </div>

        <MdEmail style={{ position: "absolute", left: "15%", top: "61.25%" }} />
        <div className="p3" style={{ left: "17%", top: "61%" }}>
          {contact.email}
        </div>

        <TiLocation
          style={{ position: "absolute", left: "15%", top: "66.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "66%" }}>
          {contact.address}
        </div>

        <FaBirthdayCake
          style={{ position: "absolute", left: "15%", top: "71.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "71%" }}>
          Born {contact.birthday}
        </div>

        <ImCalendar
          style={{ position: "absolute", left: "15%", top: "76.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "76%" }}>
          First Visited - {contact.first_visit}
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
          style={{ left: "8%" }}
        >
          <p className="pText">Previous</p>
        </button>

        <button
          className="addButton"
          onClick={() => setAddVisit(true)}
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

        <p
          className="p8"
          style={{ left: "78.75%", top: "81.25%" }}
          onClick={() => setVisitHistory(true)}
        >
          View Complete History
        </p>

        <EditContact setEditMode={setEditMode} />
      </div>
      {addVisit && <AddVisit setAddVisit={setAddVisit} />}
      {visitHistory && (
        <VisitCompleteHistory setVisitHistory={setVisitHistory} />
      )}
    </div>
  );
}
