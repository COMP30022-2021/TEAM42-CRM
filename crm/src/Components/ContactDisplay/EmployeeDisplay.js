import React from "react";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";

export default function EmployeeDisplay({ contact }) {
  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  return (
    <div>
      <div className="contactDisplay">
        <img
          src={contact.image}
          style={{
            position: "absolute",
            top: "18%",
            left: "50%",
            borderRadius: "50%",
            width: 160,
            height: 160,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
          alt="User"
        />

        <p1
          className="p3"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "36%",
            "font-size": 36,
          }}
        >
          {contact.Name}
        </p1>

        <p1
          className="p3"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "44%",
            "font-size": 20,
          }}
        >
          Role: {contact.Role}
        </p1>

        <IoIosMan
          style={{ position: "absolute", left: "15%", top: "51.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "51%" }}
        >
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
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "61%" }}
        >
          {contact.Email}{" "}
        </p1>

        <TiLocation
          style={{ position: "absolute", left: "15%", top: "66.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "66%" }}
        >
          {contact.Address}{" "}
        </p1>

        <FaBirthdayCake
          style={{ position: "absolute", left: "15%", top: "71.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "71%" }}
        >
          Born {contact.DateOfBirth}{" "}
        </p1>

        <ImCalendar
          style={{ position: "absolute", left: "15%", top: "76.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "76%" }}
        >
          Joined {contact.DateJoined}{" "}
        </p1>
      </div>

      <button
        className="button3"
        onClick={() => nextContact()}
        style={{ position: "absolute", left: "80%", top: "82%", width: "12%" }}
      >
        <p style={{ color: "#109CF1" }}>Next</p>
      </button>

      <button
        className="button3"
        onClick={() => previousContact()}
        style={{ position: "absolute", left: "25%", top: "82%", width: "12%" }}
      >
        <p style={{ color: "#109CF1" }}>Previous</p>
      </button>
    </div>
  );
}
