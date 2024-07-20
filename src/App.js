import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Forums from './Forums';
import ForumPage from './ForumPage';
import Profile from './Profile';
import AdvancedSearch from './AdvancedSearch';
import Thread from './Thread';
import CreateThread from './CreateThread';
import FAQ from './FAQ';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Forums" element={<Forums />} />
        <Route path="/ForumPage/:category" element={<ForumPage />} />
        <Route path="/ForumPage/SearchResults/:searchQuery" element={<ForumPage />} />
        <Route path="/ForumPage/SearchResults" element={<ForumPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AdvancedSearch" element={<AdvancedSearch />} />
        <Route path="/ForumPage/:category/Thread/:id" element={<Thread />} />
        <Route path="/ForumPage/:category/CreateThread" element={<CreateThread />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
