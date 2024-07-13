// ProgressBar.jsx
import React from 'react';
import './pb.css';
import loadingGif from './loading.gif' ; // Ensure to replace with the actual path to your GIF

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <span>Cooking up some brilliant ideas, please wait...</span>
    </div>
  );
};

export default ProgressBar;
