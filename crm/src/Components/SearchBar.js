import React from "react";

import { BsSearch } from "react-icons/bs";
import { AddButton } from "./AddContact/AddButton";
import { useHistory } from "react-router-dom";

export default function SearchBar({ width, onClick }) {
  const [text, setText] = React.useState("");
  const history = useHistory();

  const handleSearch = () => {
    if (text !== "") {
      history.push("/contacts/search=" + text);
    }
  };

  return (
    <div className="search-bar" style={{ width: width }}>
      <input
        style={{
          border: 0,
          height: "97%",
          width: "85%",
          top: 0,
          outline: "none",
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
          left: "4%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <AddButton
        onClick={onClick}
        style={{
          color: "#9FBF8E",
          right: "3%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

SearchBar.defaultProps = {
  width: 860,
};
