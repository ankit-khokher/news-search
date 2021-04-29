import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = (props) => {
  const { onSearchClick } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="Search-wrapper">
      <input
        className="Search-input"
        value={searchQuery}
        name="searchQuery"
        type="text"
        placeholder="Search for news"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="Search-button"
        onClick={() => {
          onSearchClick(searchQuery);
          setSearchQuery("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchComponent;
