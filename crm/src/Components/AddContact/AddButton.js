import React from "react";
import { GrAdd } from "react-icons/gr";

export const AddButton = ({ style, onClick }) => {
  return (
    <div>
      <GrAdd className="icon" style={style} onClick={() => onClick(true)} />
    </div>
  );
};
