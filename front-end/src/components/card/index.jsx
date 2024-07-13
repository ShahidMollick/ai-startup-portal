import React from 'react';
import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  border-radius: 32px;
  background: var(--Gray-2, #F7F6FA);

  ${({ variant }) => variant === 'primary' && css`
    border: 1px solid var(--primary-accent-color);
  `}

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px solid var(--secondary-color);
  `}

  ${({ variant }) => variant === 'outline' && css`
    border: 1px solid #ddd;
  `}

  ${({ variant }) => variant === 'normal' && css`
    border: 1px solid #ff4a4a;
  `}

  ${({ variant }) => variant === 'ghost' && css`
    border: none;
    box-shadow: none;
    background-color: #ffffff;
  `}
`;

const CardHeader = styled.div`
  h1,h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 4px 2px;
  }
  padding: 2px;
`;

const CardBody = styled.div`
  h1,h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }
  margin: 2px;
  padding: 2px;
`;

const CardFooter = styled.div`
  h1,h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }
  margin: 4px;
  padding: 4px;
`;

const Card = ({ variant = 'primary', width, header, body, footer }) => {
  return (
    <CardWrapper variant={variant} width={width}>
      {header && <CardHeader variant={variant}>{header}</CardHeader>}
      <CardBody>{body}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;
