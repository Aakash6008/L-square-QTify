import React, {useState} from 'react';
import './Navbar.css';
import logo from "./image.png"
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
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
      <button className="feedback-button">Give Feedback</button>
    </div>
  );
};

export default Navbar;
