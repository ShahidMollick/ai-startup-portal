import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  small: '12px',
  default: '16px',
  large: '24px',
};

const variants = {
  primary: css`
    background-color: var(--primary-accent-color);
    color: #fff;
    border: none;

    &:hover {
    opacity: 0.9;
    }

    &:active {
    background-color: var(--primary-active);
    }
  `,
  secondary: css`
    background-color: var(--secondary-color);
    color: #4A45FF;
    border: none;

    &:hover {
    background-color: #e7e7ff;
    }

    &:active {
    background-color: var(--secondary-active);
    }
  `,
  outline: css`
    background-color: #f9f9f9;
    color: #4A45FF;
    border: 1px solid #4A45FF;

    &:hover {
    background-color: var(--secondary-light);
    }

    &:active {
    background-color: var(--secondary-active);
    }
  `,
  destructive: css`
    background-color: #ff4a4a;
    color: #fff;
    border: none;

    &:hover {
    opacity: 0.9;
    }
  `,
  ghost: css`
    background-color: transparent;
    border: none;

    &:hover {
    background-color: var(--secondary-color);
    }

    &:active {
    background-color: var(--secondary-active);
    }
  `,
};

const StyledButton = styled.button`
  display: flex;
  margin : 4px;
  align-items: center;
  justify-content: start;
  padding: 10px 20px;
  font-size: ${({ size }) => sizes[size]};
  border-radius: 32px;
  cursor: pointer;
  ${({ variant }) => variants[variant]}
  width: ${({ width }) => width || 'auto'};

  img {
    margin-right: 10px;
    height: 24px;
    width: 24px;
  }
`;

const Button = ({ variant = 'primary', size = 'default', icon, width, children, ...props }) => {
  return (
    <StyledButton variant={variant} size={size} width={width} {...props}>
      {icon && <img src={icon} alt="icon" />}
      {children}
    </StyledButton>
  );
};

export default Button;