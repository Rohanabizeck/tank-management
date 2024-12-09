import React from 'react';
import './TopToolbar.css';

const TopToolbar = ({ onLogout }) => {
  return (
    <div className="top-toolbar">
      <div className="left-section">
        <div className="project-label">
          <div className="project-cell">Project - 1</div>
          <div className="cmd-cell">CMD</div>
        </div>
        <div className="command-buttons">
          <button className="cmd-btn">ST1</button>
          <button className="cmd-btn">TR1</button>
          <button className="cmd-btn">ST2</button>
          <button className="cmd-btn">TR2</button>
          <button className="cmd-btn">OFC</button>
          <button className="cmd-btn">HCRC</button>
          <button className="cmd-btn">SDR</button>
        </div>
      </div>
      <div className="right-section">
        <button className="action-btn">Add/feed</button>
        <button className="action-btn">Media files</button>
        <button className="action-btn">Save</button>
        <button className="action-btn" onClick={onLogout}>Logout</button>
        <div className="icon-buttons">
          <button className="icon-btn">
            <i className="fas fa-bell"></i>
          </button>
          <button className="icon-btn">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopToolbar;

