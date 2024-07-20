import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import profilePic from './assets/PFP.jpg';
import postPic from './assets/postCount.png';
import commentPic from './assets/comment.png';
import likePic from './assets/like.png';
import ProfileCharts from './ProfileCharts';

function Profile() {
    return (
        <div className="profile-page">
            <div className="breadcrumbs">
                <Link to="/">Home</Link> &gt;<span>Profile</span>
            </div>
            
            <div className="profile-content">
            <div className="profile-header">
                <img src={profilePic} alt="Profile" className="profile-pic-edit" />
                <div className="profile-info">
                    <h1 className="profile-name">TheNumber1</h1>
                    <p className="profile-bio">Gamer | Streamer | Tech Enthusiast</p>
                    <div className="profile-details">
                        <span className="profile-location">Location: New York, USA</span>
                        <span className="profile-joined">Member since: January 2020</span>
                    </div>
                </div>
            </div>
                <h2 className="section-title">Interests</h2>
                <p className="profile-interests">Gaming, Esports, Hardware, Technology</p>
      
                <h2 className="section-title">Achievements</h2>
                <ul className="profile-achievements">
                    <li><span role='img'>🏆</span> Completed 100 games</li>
                    <li><span role='img'>🔥</span> Top scorer in FPS tournaments</li>
                    <li><span role='img'>🌟</span> Community helper badge</li>
                </ul>

                <h2 className="section-title">Recent Activity</h2>
                <ul className="profile-activity">
                    <li>Posted in <strong>Gaming Forum:</strong> "Check out this new game..."</li>
                    <li>Commented on <strong>Hardware Forum:</strong> "I recommend this GPU..."</li>
                    <li>Liked a post in <strong>Esports Forum</strong></li>
                </ul>

                <h2 className="section-title">Statistics</h2>
                <div className="profile-statistics">
                    <div className="stat-item item-one">
                        <span className="stat-value">350</span>
                        <span className="stat-label">Posts</span>
                        <img src={postPic} alt="Profile" className="stat-img" />
                    </div>
                    <div className="stat-item item-two">
                        <span className="stat-value">120</span>
                        <span className="stat-label">Comments</span>
                        <img src={commentPic} alt="Profile" className="stat-img" />
                    </div>
                    <div className="stat-item item-three">
                        <span className="stat-value">5,000</span>
                        <span className="stat-label">Likes</span>
                        <img src={likePic} alt="Profile" className="stat-img" />
                    </div>
                </div>

                <ProfileCharts />
            </div>  
        </div>
    );
}

export default Profile;
