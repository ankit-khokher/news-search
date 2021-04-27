import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = (props) => {
  const { onSearchClick } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="Search-input">
      <input
        value={searchQuery}
        name="searchQuery"
        type="text"
        placeholder="Search for news"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
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
