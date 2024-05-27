import React from 'react';
import './Navbar.css';
import logo from "./image.png"
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <SearchBar/>
      <button className="feedback-button">Give Feedback</button>
    </div>
  );
};

export default Navbar;
