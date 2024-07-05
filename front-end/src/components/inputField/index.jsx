import React from 'react';
import styled, { css } from 'styled-components';
import defaultSearchIcon from '../../assets/icons/search.png'; // Default search icon

const sizes = {
  small: '12px',
  default: '16px',
  large: '24px',
};

const variants = {
    outlined: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #4A45FF;
    border-radius:32px;
    &:focus-within{
        border: 1px solid var(--primary-accent-color);
    }
    `,
    secondary: css`
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    color: #444;
    `,
};

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  ${({ variant }) => variants[variant]}
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  padding: 10px 16px;
  position: relative;

  img {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: transparent;
  color: inherit;
    transition: color 0.5s ease-in-out;
  &::placeholder {
    color: #aaa;
    transition: color 0.2s ease-in-out
  }

  &:focus::placeholder {
    color: #666; /* Placeholder color when focused */
  }

`;

const InputField = ({ 
  type = 'search', 
  variant = 'outlined', 
  width, 
  height, 
  icon, 
  ...props 
}) => {
  const defaultIcon = type === 'search' ? defaultSearchIcon : 'None';
  const displayIcon = icon !== undefined ? icon : defaultIcon;
  
  return (
    <StyledInputContainer variant={variant} width={width} height={height}>
      {displayIcon !== 'None' && <img src={displayIcon} alt="icon" />}
      <StyledInput {...props} />
    </StyledInputContainer>
  );
};

export default InputField;




