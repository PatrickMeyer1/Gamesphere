import React from 'react';
import { Link } from 'react-router-dom';
import './Forums.css';
import controllerPic from './assets/controller.png';
import computerPic from './assets/computer.png';
import esportsPic from './assets/esports.png';

function Forums() {
  return (
    <div className="forums-page">
      <h1 className="forums-title">Forums</h1>
      <div className="forum-category">
        <div className="category-header">
          <h2>Gaming</h2>
          <img src={controllerPic} alt="Category Icon" className="category-icon" />
          <div className="category-stats">
            <span>Last post: Today at 3:20 pm</span>
            <span>1.5k posts</span>
          </div>
        </div>
        <div className="category-links">
          <div className="category-row">
            <Link to="/ForumPage/General">General</Link>
            <Link to="/ForumPage/Action">Action</Link>
            <Link to="/ForumPage/Adventure">Adventure</Link>
            <Link to="/ForumPage/RPG">RPG</Link>
          </div>
          <div className="category-row">
            <Link to="/ForumPage/Strategy">Strategy</Link>
            <Link to="/ForumPage/Retro">Retro</Link>
            <Link to="/ForumPage/FPS">FPS</Link>
            <Link to="/ForumPage/Story">Story</Link>
          </div>
        </div>
      </div>
      <div className="forum-category centered">
        <div className="category-header">
          <h2>Hardware</h2>
          <img src={computerPic} alt="Category Icon" className="category-icon" />
          <div className="category-stats">
            <span>Last post: Yesterday at 5:45 pm</span>
            <span>850 posts</span>
          </div>
        </div>
        <div className="category-links">
          <Link to="/ForumPage/PC Builds">PC Builds</Link>
          <Link to="/ForumPage/Peripherals">Peripherals</Link>
          <Link to="/ForumPage/Consoles">Consoles</Link>
          <Link to="/ForumPage/Phones">Phones</Link>
        </div>
      </div>

      <div className="forum-category centered">
        <div className="category-header">
          <h2>Esports</h2>
          <img src={esportsPic} alt="Category Icon" className="category-icon" />  
          <div className="category-stats">
            <span>Last post: Yesterday at 10:15 am</span>
            <span>2.3k posts</span>
          </div>
        </div>
        <div className="category-links">
          <Link to="/ForumPage/Tournaments">Tournaments</Link>
          <Link to="/ForumPage/Teams">Teams</Link>
          <Link to="/ForumPage/News">News</Link>
          <Link to="/ForumPage/Highlights">Highlights</Link>
        </div>
      </div>
    </div>
  );
}

export default Forums;
