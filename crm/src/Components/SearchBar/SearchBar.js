import React from "react";

import { BsSearch } from "react-icons/bs";
import { AddButton } from "../AddContact/AddButton";
import { useHistory } from "react-router-dom";
import { SearchOn } from "./SearchOn";

export default function SearchBar({ width, onClick }) {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState({ value: "Name", label: "Name" });
  const history = useHistory();

  const handleSearch = () => {
    if (text !== "") {
      history.push("/contacts/search=" + text + "@" + value.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        style={{
          width: width + "%",
          textIndent: width === 95 ? "15%" : "22%",
        }}
        type="text"
        placeholder="Search Contact"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      ></input>
      <BsSearch
        className="icon"
        style={{
          color: "#9FBF8E",
          top: "50%",
          left: "9%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <AddButton
        onClick={onClick}
        style={{
          color: "#9FBF8E",
          right: width === 95 ? "4%" : "32%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <SearchOn value={value} setValue={setValue} />
    </div>
  );
}
