import React from 'react';
import '../plainChip/index.css'; 
import closeButtonImg from '../../../assets/icons/cross.png';

const CustomButton = ({ text, onRemove }) => {
  return (
    <button className="plain-chip" onClick={onRemove}>
      <span>{text}</span>
      <img src={closeButtonImg} alt="Remove" onClick={onRemove} className="remove-button" />
    </button>
  );
};

export default CustomButton;
