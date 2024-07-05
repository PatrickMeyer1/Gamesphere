import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';
import c5 from './assets/c5.png';
import c6 from './assets/c6.png';
import c7 from './assets/c7.png';
import c8 from './assets/c8.png';
import c9 from './assets/c9.png';
import c10 from './assets/c10.png';

function Home() {
  return (
    <div className="home-page">
      <div className="header">
        <div className="header-content">
          <h1 className="site-name">Gamesphere</h1>
          <p className="catch-phrase">Where Gaming Comes Alive</p>
        </div>
      </div>

      <div className="main-content">
        <div className="trending-section">
        <h2 className="explore-header">Trending</h2>
        <div className="trending-cards">
          <Link to="/ForumPage/PC%20Builds" className="trending-card" style={{ backgroundImage: `url(${c1})` }}>
            Pc Builds
          </Link>
          <Link to="/ForumPage/Highlights" className="trending-card" style={{ backgroundImage: `url(${c2})` }}>
            Esports Highlights
           </Link>
           <Link to="/ForumPage/Esports" className="trending-card" style={{ backgroundImage: `url(${c3})` }}>
            Esports
          </Link>
          <Link to="/ForumPage/Adventure" className="trending-card" style={{ backgroundImage: `url(${c4})` }}>
            Adventure
          </Link>
        </div>
        </div>
        <div className="explore-section">
          <h2 className="explore-header">Explore</h2>
          <div className="explore-cards">
          <Link to="/ForumPage/Tournaments" className="explore-card" style={{ backgroundImage: `url(${c5})` }}>
            <div className="darker-opacity">
              Tournaments  
            </div></Link>
            <Link to="/ForumPage/Retro" className="explore-card" style={{ backgroundImage: `url(${c6})` }}>
            <div className="darker-opacity">
              Retro Gaming  
            </div></Link>
            <Link to="/ForumPage/Peripheral" className="explore-card" style={{ backgroundImage: `url(${c7})` }}>
            <div className="darker-opacity">
              Gaming Mice  
            </div></Link>
            <Link to="/ForumPage/FPS" className="explore-card" style={{ backgroundImage: `url(${c8})` }}>
            <div className="darker-opacity">
              Shooters 
            </div></Link>
            <Link to="/ForumPage/RPG" className="explore-card" style={{ backgroundImage: `url(${c9})` }}>
            <div className="darker-opacity">
              Conquering RPGs  
            </div></Link>
            <Link to="/ForumPage/Action" className="explore-card" style={{ backgroundImage: `url(${c10})` }}>
            <div className="darker-opacity">
              Action-Adventure  
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;