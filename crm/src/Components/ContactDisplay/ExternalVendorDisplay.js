import React from "react";
import EngagementTable from "./EngagementTable";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";

export default function ExternalVendorDisplay({ contact }) {
  const nextContact = () => {
    alert("next contact please");
  };

  const previousContact = () => {
    alert("previous contact please");
  };

  const addVisit = () => {
    alert("Visit has happened");
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
          Role: External Vendor
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

        <ImPriceTags
          style={{ position: "absolute", left: "15%", top: "71.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "71%" }}
        >
          Tags: {contact.tags}{" "}
        </p1>

        <BiDollar
          style={{ position: "absolute", left: "15%", top: "76.25%" }}
        />
        <p1
          className="p3"
          style={{ position: "absolute", left: "17%", top: "76%" }}
        >
          {contact.cost}{" "}
        </p1>
      </div>

      <button
        className="button3"
        onClick={() => nextContact()}
        style={{ position: "absolute", left: "80%", top: "86%", width: "12%" }}
      >
        <p style={{ color: "#109CF1" }}>Next</p>
      </button>

      <button
        className="button3"
        onClick={() => previousContact()}
        style={{ position: "absolute", left: "25%", top: "86%", width: "12%" }}
      >
        <p style={{ color: "#109CF1" }}>Previous</p>
      </button>

      <button
        className="button3"
        onClick={() => addVisit()}
        style={{
          position: "absolute",
          left: "52.5%",
          top: "86%",
          width: "12%",
          backgroundColor: "#265573",
        }}
      >
        <p>Add Engagement</p>
      </button>

      <div
        style={{
          position: "absolute",
          left: "70%",
          top: "53%",
          width: "15%",
          height: "25%",
        }}
      >
        <EngagementTable />
      </div>

      <p
        className="p8"
        style={{
          position: "absolute",
          left: "77.25%",
          top: "78.25%",
          width: "12%",
        }}
      >
        View Complete History
      </p>
    </div>
  );
}
