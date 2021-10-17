import React from "react";

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

export default function EmployeeDisplay({ contact, setEditMode }) {
  const image =
    contact.gender === 0
      ? contact.role === "Employee"
        ? employee
        : customer
      : vendor;
  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  console.log(contact);
  return (
    <div className="contactDisplay">
      <img src={image} className="contactImage" alt="user" />

      <div className="contactTitle">{contact.name}</div>

      <div className="contactSubtitle">Role: {contact.role}</div>

      <IoIosMan style={{ position: "absolute", left: "15%", top: "51.25%" }} />
      <div className="p3" style={{ left: "17.2%", top: "51%" }}>
        {contact.gender === 1 ? "Male" : "Female"}
      </div>

      <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
      <div className="p3" style={{ left: "17.2%", top: "56%" }}>
        {contact.phone}
      </div>

      <MdEmail style={{ position: "absolute", left: "15%", top: "61.25%" }} />
      <div className="p3" style={{ left: "17.2%", top: "61%" }}>
        {contact.email}
      </div>

      <TiLocation
        style={{ position: "absolute", left: "15%", top: "66.25%" }}
      />
      <div className="p3" style={{ left: "17.2%", top: "66%" }}>
        {contact.address}
      </div>

      <FaBirthdayCake
        style={{ position: "absolute", left: "15%", top: "71.25%" }}
      />
      <div className="p3" style={{ left: "17.2%", top: "71%" }}>
        Born {contact.birthday}
      </div>

      <ImCalendar
        style={{ position: "absolute", left: "15%", top: "76.25%" }}
      />
      <div className="p3" style={{ left: "17.2%", top: "76%" }}>
        Joined {contact.date_joined}
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
