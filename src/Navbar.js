import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import profilePic from './assets/PFP.jpg';
import bellPic from './assets/notification-bell.png';
import logoPic from './assets/logo.png';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showNotificationWarning, setShowNotificationWarning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleAdvancedClick = () => {
    navigate('AdvancedSearch');
  };

  const handleNotificationClick = () => {
    setShowNotificationWarning(true);
    setTimeout(() => setShowNotificationWarning(false), 4000);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/ForumPage/SearchResults/${searchQuery.trim()}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img className="logo-icon" src={logoPic} alt="Gamesphere logo"/></Link>
      </div>
      <div className="search-bar-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchClick}
            onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
          />
          <div className={`search-dropdown ${dropdownVisible ? 'show' : ''}`}>
            <button type="submit">Search</button>
            <button type="button" onClick={handleAdvancedClick}>Advanced</button>
          </div>
        </form>
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
        <span className="nav-link"><Link to="/FAQ">FAQ</Link></span>
        <span className="notification-bell nav-link">
          <img src={bellPic} alt="Notifications" onClick={handleNotificationClick}/>
        </span>
      </div>
      {showNotificationWarning && (
        <div className="notification-warning">
          0 notifications
        </div>
      )}
      <div id="google_translate_element" className="google-translate"></div>
      
    </nav>
  );
}

export default Navbar;
