import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading, faItalic, faBold, faCode } from '@fortawesome/free-solid-svg-icons';
import './CreateThread.css';

const tagsOptions = [
  { value: 'general', label: 'General' },
  { value: 'game_reviews', label: 'Game Reviews' },
  { value: 'hardware', label: 'Hardware' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'esports', label: 'Esports' },
  { value: 'rpg', label: 'RPG' },
];

function CreateThread() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTagsChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleSubmit = (e) => {
    /*
    e.preventDefault();
    console.log('Thread Title:', title);
    console.log('Selected Tags:', selectedTags);
    console.log('Content:', content);
    */
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
      <div className="thread-container">
      <h1 className="create-thread-header">Create Thread</h1>
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
              value={selectedTags}
              onChange={handleTagsChange}
              options={tagsOptions}
              styles={customStyles}
              className="multi-select"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <div className="icon-row">
              <FontAwesomeIcon icon={faHeading} className="thread-icon" style={{ color: 'black' }} />
              <FontAwesomeIcon icon={faItalic} className="thread-icon" style={{ color: 'black' }} />
              <FontAwesomeIcon icon={faBold} className="thread-icon" style={{ color: 'black' }} />
              <FontAwesomeIcon icon={faCode} className="thread-icon" style={{ color: 'black' }} />
            </div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              required
            />
          </div>

          <div className="button-container">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateThread;
