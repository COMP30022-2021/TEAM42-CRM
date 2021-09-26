import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "../AddContact/ExternalVendorInner";

export default function UpdateExternalVendor({ setBlur,contact }) {
    function createContact() {
      setBlur(false);
    }
    return (
      <div style={{ background: "#265573", width: "100%", height: "100%" }}>
        <div
          style={{
            background: "#FFFCFC",
            width: 916,
            height: 524,
            position: "absolute",
            left: "50%",
            top: "52.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Header text={"Update Vendor Contact"} top_a={"0%"} width_a={916} />
          
          <ExternalVendorInner contact = {contact}/>
  
          <button
            className="button2"
            onClick={createContact}
            style={{ width: "25%", margin: 10, left: "20%", top: "83.5%" }}
          >
            <p>Update Vendor Contact</p>
          </button>


          <button
            className="button2"
            onClick={createContact}
            style={{ width: "25%", margin: 10, left: "50%", top: "83.5%" ,background: "red"}}
          >
            <p>Delete Vendor Contact</p>
          </button>
            
          <GrClose
          onClick={() => setBlur(false)}
          style={{ position: "absolute", left: "95%", top: "2.5%" }}
          cursor="pointer"
          />  
  
          <Header text={""} top_a={"100%"} width_a={916} />  
        </div>
      </div>
    );
  }
  
UpdateExternalVendor.defaultProps = {
    contact: {
      Name: "",
      Gender: "",
      Email: "",
      Phone: "",
      Address: "",
      DateOfBirth: "",
      DateJoined: "",
    },
  };
  