import React from 'react';
import './ForumPage.css';
import { Link, useParams } from 'react-router-dom';
import default1 from './assets/default1.png';
import default2 from './assets/default2.png';
import default3 from './assets/default3.png';
import default4 from './assets/default4.png';
import default5 from './assets/default5.png';
import default6 from './assets/default6.png';
import default7 from './assets/default7.png';
import default8 from './assets/default8.png';

function ForumPage() {
  const { category } = useParams();

  const threads = [
    {
      id: 1,
      threadName: 'Best Weapons in Gaming History',
      username: 'YaBoy780',
      publishedDate: 'July 2, 2024',
      replies: 45,
      views: 1500,
      category: 'General'
    },
    {
      id: 2,
      threadName: 'Top FPS Games for PC',
      username: 'ShooterPro',
      publishedDate: 'June 30, 2024',
      replies: 30,
      views: 1200,
      category: 'FPS'
    },
    {
      id: 3,
      threadName: 'Upcoming Strategy Games',
      username: 'Strategist',
      publishedDate: 'June 25, 2024',
      replies: 250,
      views: 9000,
      category: 'Strategy'
    },
    {
      id: 4,
      threadName: 'Best Indie Games of the Year',
      username: 'IndieFan',
      publishedDate: 'July 1, 2024',
      replies: 40,
      views: 1300,
      category: 'Indie'
    },
    {
      id: 5,
      threadName: 'Esports News and Updates',
      username: 'EsportsGuru',
      publishedDate: 'July 2, 2024',
      replies: 50,
      views: 1800,
      category: 'Esports'
    },
    {
      id: 6,
      threadName: 'Hardware Recommendations for Gaming',
      username: 'Techie',
      publishedDate: 'June 28, 2024',
      replies: 25,
      views: 1000,
      category: 'PC Builds'
    },
    {
      id: 7,
      threadName: 'Top 10 Mobile Games',
      username: 'MobileGamer',
      publishedDate: 'June 27, 2024',
      replies: 150,
      views: 7000,
      category: 'Phones'
    },
    {
      id: 8,
      threadName: 'Best RPG Games of 2024',
      username: 'VRFanatic',
      publishedDate: 'June 26, 2024',
      replies: 35,
      views: 1100,
      category: 'RPG'
    },
    {
      id: 9,
      threadName: 'Latest Action Games Releases',
      username: 'ActionFanatic',
      publishedDate: 'July 3, 2024',
      replies: 20,
      views: 800,
      category: 'Action'
    },
    {
      id: 10,
      threadName: 'Exploring the World of Adventure Games',
      username: 'AdventureSeek',
      publishedDate: 'July 1, 2024',
      replies: 15,
      views: 600,
      category: 'Adventure'
    },
    {
      id: 11,
      threadName: 'Strategic Insights for Competitive Gaming',
      username: 'CompGamer',
      publishedDate: 'July 2, 2024',
      replies: 60,
      views: 2500,
      category: 'Strategy'
    },
    {
      id: 12,
      threadName: 'Retro Gaming Revival: Nostalgia or Necessity?',
      username: 'RetroGamer',
      publishedDate: 'July 3, 2024',
      replies: 30,
      views: 1200,
      category: 'Retro'
    },
    {
      id: 13,
      threadName: 'Peripherals Buying Guide for Gamers',
      username: 'TechEnthusiast',
      publishedDate: 'July 1, 2024',
      replies: 25,
      views: 1000,
      category: 'Peripherals'
    },
    {
      id: 14,
      threadName: 'Console Wars: Which Console Should You Choose?',
      username: 'ConsoleGamer',
      publishedDate: 'July 2, 2024',
      replies: 45,
      views: 1800,
      category: 'Consoles'
    },
    {
      id: 15,
      threadName: 'Best Mobile Phones for Mobile Gaming',
      username: 'MobileGaming',
      publishedDate: 'July 3, 2024',
      replies: 35,
      views: 1500,
      category: 'Phones'
    },
    {
      id: 16,
      threadName: 'Esports Tournaments Recap',
      username: 'EsportsEn10',
      publishedDate: 'July 1, 2024',
      replies: 70,
      views: 3000,
      category: 'Tournaments'
    },
    {
      id: 17,
      threadName: 'Team Strategies for Competitive Play',
      username: 'TeamLeader',
      publishedDate: 'July 2, 2024',
      replies: 55,
      views: 2200,
      category: 'Teams'
    },
    {
      id: 18,
      threadName: 'Gaming News Roundup',
      username: 'GamingNews',
      publishedDate: 'July 3, 2024',
      replies: 40,
      views: 1600,
      category: 'News'
    },
    {
      id: 19,
      threadName: 'Highlights from E3 2024',
      username: 'E3Highlights',
      publishedDate: 'July 1, 2024',
      replies: 50,
      views: 2000,
      category: 'Highlights'
    },
    {
      id: 20,
      threadName: 'Best FPS Games of the Year',
      username: 'FPSGamer',
      publishedDate: 'July 2, 2024',
      replies: 2,
      views: 0,
      category: 'FPS'
    },
    {
      id: 21,
      threadName: 'Discussing Storytelling in Games',
      username: 'StoryLover',
      publishedDate: 'July 3, 2024',
      replies: 2,
      views: 0,
      category: 'Story'
    },
    {
      id: 22,
      threadName: 'Favorite Gaming Moments of All Time',
      username: 'MemorableGuy',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0,
      category: 'General'
    },
    {
      id: 23,
      threadName: 'Building the Ultimate Gaming PC',
      username: 'PCMasterBuild',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0, 
      category: 'PC Builds'
    },
    {
      id: 24,
      threadName: 'Best Gaming Keyboards for 2024',
      username: 'KeyboardEmp',
      publishedDate: 'July 4, 2024',
      replies: 2,
      views: 0, 
      category: 'Peripherals'
    },
    {
      id: 25,
      threadName: 'Console Exclusive Games Discussion',
      username: 'ConsoleGamer',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0, 
      category: 'Consoles'
    },
    {
      id: 26,
      threadName: 'Gaming Performance on Latest Smartphones',
      username: 'MobileGamer',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0, 
      category: 'Phones'
    },
    {
      id: 27,
      threadName: 'Future of Esports Tournaments',
      username: 'EsportsEn10',
      publishedDate: 'July 4, 2024',
      replies: 2,
      views: 3, 
      category: 'Tournaments'
    },
    {
      id: 28,
      threadName: 'Strategies for Building a Competitive Gaming Team',
      username: 'TeamLeader',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0, 
      category: 'Teams'
    },
    {
      id: 29,
      threadName: 'Latest Gaming Industry News',
      username: 'GamingInsider',
      publishedDate: 'July 4, 2024',
      replies: 2,
      views: 0, 
      category: 'News'
    },
    {
      id: 30,
      threadName: 'Top Moments from Gaming Conventions',
      username: 'ConventionsFan',
      publishedDate: 'July 4, 2024',
      replies: 2, 
      views: 0, 
      category: 'Highlights'
    }
  ];

  const defaultPics = [default1, default2, default3, default4, default5, default6, default7, default8];

  const filteredThreads = threads.filter(thread => thread.category === category);

  return (
    <div className="forum-page">
      <h1 className="forum-title">{category} Forum</h1>
      <Link to="/CreateThread" className="create-thread-button">
        Create Thread
      </Link>
      <div className="threads-container">
        {filteredThreads.map((thread, index) => {
          const picNumber = index % defaultPics.length;
          return (
            <Link to={`/Thread/${thread.id}`} className="thread-box" key={thread.id}>
              <img src={defaultPics[picNumber]} alt="Profile" className="profile-pic-forum" />
              <div className="thread-content">
                <h2 className="thread-name">{thread.threadName}</h2>
                <p className="thread-info">
                  {thread.username} | {thread.publishedDate}
                </p>
              </div>
              <div className="thread-stats">
                <span>Replies: {thread.replies}</span>
                <span>Views: {thread.views}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ForumPage;