import React from "react";
import EngagementTable from "./EngagementTable";
import AddEngagement from "../Visits/AddEngagement";
import EngagementCompleteHistory from "../Visits/EngagementCompleteHistory";

import { IoIosMan } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { EditContact } from "./EditContact";

import customer from "../../res/images/Customer.jpg";
import employee from "../../res/images/Employee.jfif";
import vendor from "../../res/images/external_vendor.jpg";

export default function ExternalVendorDisplay({ contact, setEditMode }) {
  const [addEngagement, setAddEngagement] = React.useState(false);
  const [engagementHistory, setEngagementHistory] = React.useState(false);

  const blurred = addEngagement || engagementHistory;
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

  const addVisit = () => {
    setAddEngagement(true);
  };

  return (
    <div>
      <div
        className="contactDisplay"
        style={{
          filter:
            "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))" +
            (blurred ? "blur(2px)" : ""),
        }}
      >
        <img src={image} className="contactImage" alt="User" />

        <div className="contactTitle">{contact.name}</div>

        <div className="contactSubtitle">Role: External Vendor</div>

        <IoIosMan
          style={{ position: "absolute", left: "15%", top: "51.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "51%" }}>
          {contact.gender === 1 ? "Male" : "Female"}
        </div>

        <ImPhone style={{ position: "absolute", left: "15%", top: "56.25%" }} />
        <div className="p3" style={{ left: "17%", top: "56%" }}>
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

        <ImPriceTags
          style={{ position: "absolute", left: "15%", top: "71.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "71%" }}>
          Tags: {contact.tags}
        </div>

        <BiDollar
          style={{ position: "absolute", left: "15%", top: "76.25%" }}
        />
        <div className="p3" style={{ left: "17%", top: "76%" }}>
          {contact.rate}
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
          onClick={() => addVisit()}
          style={{ left: "44%" }}
        >
          <p>Add Engagement</p>
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
          <EngagementTable />
        </div>

        <p
          className="p8"
          style={{ left: "78.75%", top: "81.25%" }}
          onClick={() => setEngagementHistory(true)}
        >
          View Complete History
        </p>

        <EditContact setEditMode={setEditMode} />
      </div>
      {addEngagement && <AddEngagement setAddEngagement={setAddEngagement} />}
      {engagementHistory && (
        <EngagementCompleteHistory
          setEngagementHistory={setEngagementHistory}
        />
      )}
    </div>
  );
}
