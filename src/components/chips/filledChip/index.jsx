import React from 'react';
import '../filledChip/index.css'; 

const CustomTextComponent = ({ onFocusSearch, type }) => {
  return (
    <button className="custom-button" onClick={onFocusSearch}>
      <div className="small-text">Add {type}</div>
      <div className="large-text">+</div>
    </button>
  );
};

export default CustomTextComponent;
