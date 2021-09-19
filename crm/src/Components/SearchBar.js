import React from "react";
import PropTypes from "prop-types";

import { BsSearch } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

export default function SearchBar({ width }) {
  const [text, setText] = React.useState("");

  return (
    <div className="search-bar" style={{ width: width }}>
      <input
        style={{
          border: 0,
          height: 58,
          width: width - 120,
          top: 0,
          left: 500,
          outline: "none",
        }}
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
        style={{ color: "#9FBF8E", left: width - 35, top: 20 }}
      />
    </div>
  );
}

SearchBar.contextTypes = {
  router: PropTypes.object.isRequired,
};

SearchBar.defaultProps = {
  width: 860,
};
