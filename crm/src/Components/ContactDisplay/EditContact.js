import React from "react";
import AddPopUp from "../AddContact/AddPopUp";
import { AiFillEdit } from "react-icons/ai";

export const EditContact = ({ setEditMode }) => {
  return (
    <div>
      <AiFillEdit
        onClick={() => setEditMode(true)}
        size={25}
        style={{
          position: "absolute",
          top: "10%",
          right: "7%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
