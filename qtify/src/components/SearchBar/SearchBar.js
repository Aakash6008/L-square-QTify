import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar-search">
      <div className="searchbar-input">
        <input
          className="search-input"
          type="text"
          placeholder="Search an album of your choice"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button className="search-button">
          <SearchIcon />
        </button>
    </div>
  );
};

export default SearchBar;
