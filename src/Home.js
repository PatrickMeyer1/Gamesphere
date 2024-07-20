import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';
import c5 from './assets/c5.png';
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
        <div className="explore-section">
          <h2 className="explore-header">Trending</h2>
          <div className="explore-cards">
          <Link to="/ForumPage/Tournaments" className="explore-card" style={{ backgroundImage: `url(${c5})` }}>
            <div className="darker-opacity">
              Tournaments  
            </div>
            </Link>
            <Link to="/ForumPage/PC%20Builds" className="explore-card" style={{ backgroundImage: `url(${c1})` }}>
            <div className="darker-opacity">
            Pc Builds
            </div>
          </Link>
          <Link to="/ForumPage/Highlights" className="explore-card" style={{ backgroundImage: `url(${c2})` }}>
          <div className="darker-opacity">
            Esports Highlights
            </div>
           </Link>
           <Link to="/ForumPage/Esports" className="explore-card" style={{ backgroundImage: `url(${c3})` }}>
           <div className="darker-opacity">
            Esports
            </div>
          </Link>
          <Link to="/ForumPage/Adventure" className="explore-card" style={{ backgroundImage: `url(${c4})` }}>
          <div className="darker-opacity">
            Adventure
            </div>
          </Link>
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