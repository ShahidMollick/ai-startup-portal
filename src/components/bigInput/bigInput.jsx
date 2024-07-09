import React from 'react';
import styled from 'styled-components';

const BigInputContainer = styled.div`
  display: flex;
  height: 515px;
  padding: 16px 2px 2px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 32px;
  background: rgba(68, 139, 220, 0.07);
  margin-top: 10px;
`;

const StyledInput = styled.textarea`
  border: none;
  outline: none;
  background: transparent;
  color: var(--Black-1, #000000); /* Changed color to improve visibility */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  height: 100%; /* Ensures the textarea fills the container */
  resize: none; /* Prevents resizing of the textarea */

  ::placeholder {
    color: var(--Black-1, #CFD3D4); /* Placeholder color */
  }
`;

const BigInput = ({ placeholder }) => {
  return (
    <BigInputContainer>
      <StyledInput placeholder={placeholder || "Your text goes here..."} />
    </BigInputContainer>
  );
};

export default BigInput;
