import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <div className="search-bar">
      <input
        style={{ border: 0, height: 58, width: 740, top: 0, outline: "none" }}
        type="text"
        placeholder="Search Contact"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <BsSearch
        className="icon"
        style={{ color: "#9FBF8E", top: 20, left: 30 }}
      />
      <GrAdd
        className="icon"
        style={{ color: "#9FBF8E", left: 825, top: 20 }}
      />
    </div>
  );
}
