import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import profilePic from './assets/PFP.jpg';
import bellPic from './assets/notification-bell.png';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleAdvancedClick = () => {
    navigate('AdvancedSearch');
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">Gamesphere</Link></div>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onFocus={handleSearchClick}
          onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
        />
        <div className={`search-dropdown ${dropdownVisible ? 'show' : ''}`}>
          <button onClick={() => console.log('Search')}>Search</button>
          <button onClick={handleAdvancedClick}>Advanced</button>
        </div>
      </div>
      <div className="nav-links">
        <span className="nav-link"><Link to="/">Home</Link></span>
        <span className="nav-link"><Link to="/Forums">Forums</Link></span>
        <span className="profile nav-link">
          <Link to="/Profile">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <span className="profile-text">Profile</span>
          </Link>
        </span>
        <span className="notification-bell nav-link">
          <img src={bellPic} alt="Notifications" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
