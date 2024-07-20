import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdvancedSearch.css';

function AdvancedSearch() {

  const navigate = useNavigate();
  
  const [collapsedSections, setCollapsedSections] = useState({
    title: true,
    categories: true,
    viewCount: true,
    author: true,
    replyCount: true,
  });

  const [filters, setFilters] = useState({
    title: '',
    author: '',
    categories: [],
    viewCount: [],
    replyCount: [],
  });

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams(filters).toString();
    console.log("Filters before navigating:", filters);
    navigate(`/ForumPage/SearchResults/?${queryParams}`);
  };

  return (
    <div className="advanced-search-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <span>Advanced Search</span>
      </div>
      <h1 className="search-header">Advanced Search</h1>
      <div className="content-container">
        <div className="encapsulating-container">
          <div className="row">
            <div className={`search-section ${collapsedSections.title ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('title')}>
                <h2>Thread Title</h2> <span className="expand-icon">{collapsedSections.title ? '+' : '-'}</span>
              </div>
              {!collapsedSections.title && (
                <div className="section-content">
                  <input 
                    type="text" 
                    name="title"
                    value={filters.title}
                    onChange={(e) => setFilters({ ...filters, title: e.target.value })}
                  />
                </div>
              )}
            </div>
            <div className={`search-section ${collapsedSections.author ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('author')}>
                <h2>Thread Author</h2> <span className="expand-icon">{collapsedSections.author ? '+' : '-'}</span>
              </div>
              {!collapsedSections.author && (
                <div className="section-content">
                  <input 
                    type="text"
                    name="author"
                    value={filters.author}
                    onChange={(e) => setFilters({ ...filters, author: e.target.value })}
                  />
                </div>
              )}
            </div>
            <div className={`search-section ${collapsedSections.categories ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('categories')}>
                <h2>Forum Category</h2> <span className="expand-icon">{collapsedSections.categories ? '+' : '-'}</span>
              </div>
              {!collapsedSections.categories && (
                <div className="section-content">
                  {['General', 'Action', 'Adventure', 'RPG', 'Strategy', 'Retro', 'FPS', 'Story', 'PC Builds', 'Peripherals', 'Consoles', 'Phones', 'Tournaments', 'Teams', 'News', 'Highlights'].map(category => (
                    <label key={category}>
                      <input
                        type="checkbox"
                        value={category}
                        checked={filters.categories.includes(category)}
                        onChange={() => toggleFilter('categories', category)}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className={`search-section ${collapsedSections.viewCount ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('viewCount')}>
                <h2>View Count</h2> <span className="expand-icon">{collapsedSections.viewCount ? '+' : '-'}</span>
              </div>
              {!collapsedSections.viewCount && (
                <div className="section-content">
                  {['0-499', '500-999', '1000+'].map(range => (
                    <label key={range}>
                      <input
                        type="checkbox"
                        value={range}
                        checked={filters.viewCount.includes(range)}
                        onChange={() => toggleFilter('viewCount', range)}
                      />
                      {range}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className={`search-section ${collapsedSections.replyCount ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('replyCount')}>
                <h2>Reply Count</h2> <span className="expand-icon">{collapsedSections.replyCount ? '+' : '-'}</span>
              </div>
              {!collapsedSections.replyCount && (
                <div className="section-content">
                  {['0-49', '50-99', '100+'].map(range => (
                    <label key={range}>
                      <input
                        type="checkbox"
                        value={range}
                        checked={filters.replyCount.includes(range)}
                        onChange={() => toggleFilter('replyCount', range)}
                      />
                      {range}
                    </label>
                  ))}
                </div>
              )}
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