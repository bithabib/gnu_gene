// components/SearchBar.js
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="m-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter gene locus (e.g., AT3G55120)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
