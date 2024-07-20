import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import PFP from './assets/PFP.jpg';
import './CreateThread.css';

const tagsOptions = [
  { value: 'New Release', label: 'New Release' },
  { value: 'Never Seen', label: 'Never Seen' },
  { value: 'Hidden Gem', label: 'Hidden Gem' },
  { value: 'Fan Favorite', label: 'Fan Favorite' },
  { value: 'Controversial', label: 'Controversial' },
  { value: 'Tech Talk', label: 'Tech Talk' },
];

function CreateThread() {
  const { category } = useParams();
  const [tags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setContent] = useState('');
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || text.trim().length === 0) {
      alert('Title and/or Content cannot be empty.');
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmPost = () => {
    const newThreadData = {
      id: 50,
      title,
      author: 'TheNumber1',
      date: 'Just Now',
      profilePic: PFP,
      tags: tags.map(tag => tag.value),
      comments: [{
        author: 'TheNumber1',
        id: 1,
        profilePic: PFP,
        timeAgo: '1',
        timeUnits: 'minute ago',
        likes: 6,
        dislikes: 1,
        shares: 3,
        text
      }],
    };
    navigate(`/ForumPage/${category}/Thread/${newThreadData.id}`, { state: { newThreadData } });
  };

  const customStyles = {
    multiValue: (provided) => ({
      ...provided,
      borderRadius: '12px',
      backgroundColor: '#770248',
      color: 'white',
      padding: '3px 3px',
      fontSize: '14px',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
      fontSize: '14px',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: 'rgba(166, 0, 100, 0.9)',
        color: 'white',
      },
    }),
    control: (provided) => ({
      ...provided,
      width: '100%',
      borderRadius: '8px',
    }),
  };

  return (
    <div className="create-thread-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <Link to="/Forums">Forums</Link> &gt; <Link to={`/ForumPage/${category}`}>{category}</Link> &gt; <span>Create Thread</span>
      </div>
      <div className="thread-container">
        <h1 className="create-thread-header">Create Thread</h1>
        <div className="forum-name-create">Forum Page: {category}</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <Select
              id="tags"
              isMulti
              value={tags}
              onChange={(selectedTags) => setSelectedTags(selectedTags)}
              options={tagsOptions}
              styles={customStyles}
              className="multi-select"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={text}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              required
            />
          </div>

          <div className="button-container">
            <button type="submit">Post</button>
          </div>
        </form>
        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Are you sure you want to post this thread?</p>
            <div className="confirmation-buttons">
              <button className="confirm-btn" onClick={handleConfirmPost}>Confirm</button>
              <button className="cancel-btn" onClick={() => setShowConfirmation(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateThread;
