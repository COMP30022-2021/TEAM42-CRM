import React, { useState } from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";
import ExternalVendorInner from "../AddContact/ExternalVendorInner";
import { useHistory } from "react-router-dom";

export default function UpdateExternalVendor({ setEditMode, contact }) {
  const history = useHistory();
  const [vendorName, setName] = useState(contact.name);
  const [vendorEmail, setEmail] = useState(contact.email);
  const [vendorAddress, setAddress] = useState(contact.address);
  const [vendorTags, setTags] = useState(contact.tags);
  const [vendorCost, setVendorCost] = useState(contact.rate);
  const [vendorPhone, setPhone] = useState(contact.phone);
  const [vendorIsMale, setIsMale] = useState(contact.gender === 1);

  console.log(contact, "hi");
  const properties = {
    vendorName,
    setName,
    vendorEmail,
    setEmail,
    vendorAddress,
    setAddress,
    vendorTags,
    setTags,
    vendorCost,
    setVendorCost,
    vendorPhone,
    setPhone,
    vendorIsMale,
    setIsMale,
  };

  const handleDelete = () => {
    fetch(
      "https://team42-crm.herokuapp.com/vendor/delete/" +
        contact.vendor_id +
        "?businessID=" +
        localStorage.getItem("businessID"),
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          alert("Contact Deleted");
          history.push("/contacts/all/all");
        } else {
          alert(data.status_message);
        }
      });
  };

  return (
    <div className="addContact">
      <Header text={"Update Vendor Contact"} top_a={"0%"} width_a={"100%"} />

      <ExternalVendorInner values={properties} />

      <button
        className="buttonCustomer"
        style={{ width: "25%", left: "23%", top: "81%" }}
      >
        <p>Update Contact</p>
      </button>

      <button
        className="deleteButton"
        style={{ width: "25%", left: "52%", top: "81%" }}
        onClick={handleDelete}
      >
        <p>Delete Contact</p>
      </button>

      <GrClose
        onClick={() => setEditMode(false)}
        style={{ position: "absolute", left: "95%", top: "1%" }}
        cursor="pointer"
      />

      <Header text={""} top_a={"100%"} width_a={"100%"} />
    </div>
  );
}
