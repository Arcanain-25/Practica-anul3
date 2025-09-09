import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Caută mașină..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
