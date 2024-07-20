import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Forums.css';
import controllerPic from './assets/controller.png';
import computerPic from './assets/computer.png';
import esportsPic from './assets/esports.png';

function Forums() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const isCategoryActive = (category) => activeCategory === category;

  return (
    <div className="forums-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt;<span>Forums</span>
      </div>
      <h1 className="forums-title">Forums</h1>

      <div className={`forum-category ${isCategoryActive('Gaming') ? 'active' : ''}`}>
        <div className="category-header" onClick={() => toggleCategory('Gaming')}>
          <h2>Gaming</h2>
          <img src={controllerPic} alt="Category Icon" className="category-icon" />
          <div className="category-stats">
            <span>Last post: Today at 3:20 pm</span>
            <span>11 posts</span>
          </div>
        </div>
        <div className={`category-links ${isCategoryActive('Gaming') ? 'expanded' : ''}`}>
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

      <div className={`forum-category centered ${isCategoryActive('Hardware') ? 'active' : ''}`}>
        <div className="category-header" onClick={() => toggleCategory('Hardware')}>
          <h2>Hardware</h2>
          <img src={computerPic} alt="Category Icon" className="category-icon" />
          <div className="category-stats">
            <span>Last post: Yesterday at 5:45 pm</span>
            <span>9 posts</span>
          </div>
        </div>
        <div className={`category-links ${isCategoryActive('Hardware') ? 'expanded' : ''}`}>
          <Link to="/ForumPage/PC Builds">PC Builds</Link>
          <Link to="/ForumPage/Peripherals">Peripherals</Link>
          <Link to="/ForumPage/Consoles">Consoles</Link>
          <Link to="/ForumPage/Phones">Phones</Link>
        </div>
      </div>

      <div className={`forum-category centered ${isCategoryActive('Esports') ? 'active' : ''}`}>
        <div className="category-header" onClick={() => toggleCategory('Esports')}>
          <h2>Esports</h2>
          <img src={esportsPic} alt="Category Icon" className="category-icon" />  
          <div className="category-stats">
            <span>Last post: Yesterday at 10:15 am</span>
            <span>8 posts</span>
          </div>
        </div>
        <div className={`category-links ${isCategoryActive('Esports') ? 'expanded' : ''}`}>
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
