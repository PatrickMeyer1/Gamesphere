import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdvancedSearch.css';

function AdvancedSearch() {
  const navigate = useNavigate();
  const handleSearch = () => {
    // TODO
    //navigate('/Thread');
  };

  return (
    <div className="advanced-search-page">
      <h1 className="search-header">Advanced Search</h1>
      <div className="content-container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <span>Advanced Search</span>
        </div>
        <div className="encapsulating-container">
          <div className="row">
            <div className="search-section">
              <div className="section-header">
                <h2>Games</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> COD</label>
                <label><input type="checkbox" /> Fortnite</label>
                <label><input type="checkbox" /> Elden Ring</label>
                <p>View More...</p>
              </div>
            </div>
            <div className="search-section">
              <div className="section-header">
                <h2>Categories</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> General</label>
                <label><input type="checkbox" /> Game Reviews</label>
                <label><input type="checkbox" /> Hardware</label>
                <p>View More...</p>
              </div>
            </div>
            <div className="search-section">
              <div className="section-header">
                <h2>Popularity</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> Most Viewed</label>
                <label><input type="checkbox" /> Top Rated</label>
                <label><input type="checkbox" /> Trending</label>
                <p>View More...</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="search-section">
              <div className="section-header">
                <h2>Date Posted</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> Last Week</label>
                <label><input type="checkbox" /> Last Month</label>
                <label><input type="checkbox" /> Last Year</label>
                <p>View More...</p>
              </div>
            </div>
            <div className="search-section">
              <div className="section-header">
                <h2>Platforms</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> XBOX</label>
                <label><input type="checkbox" /> PlayStation</label>
                <label><input type="checkbox" /> PC</label>
                <p>View More...</p>
              </div>
            </div>
            <div className="search-section">
              <div className="section-header">
                <h2>Reply Count</h2>
              </div>
              <div className="section-content">
                <label><input type="checkbox" /> 0-100</label>
                <label><input type="checkbox" /> 100-1000</label>
                <label><input type="checkbox" /> 1000-5000</label>
                <label><input type="checkbox" /> 5000+</label>
              </div>
            </div>
          </div>
          <div className="search-button-container">
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearch;