import React from 'react';
import styled from 'styled-components';
import Button from '../button/index';
import cross from '../../assets/icons/cross.png';

const StyledChip = styled(Button)`
  display: flex;
  align-items: center;
  justify-content:space-between;
  border-radius: 32px;
  padding:  3px 8px;
  max-width: 200px;  /* Adjust this value based on your design */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height:32px;
`;

const IconButton = styled(Button)`
  width: 16px;
  height: 16px;
  padding: 2px;
  background: none;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Chip = ({ children, icon, variant = 'outline', onRemove }) => {
  return (
    <StyledChip variant={variant}>
      {children}
      <IconButton variant="ghost" onClick={onRemove}>
        <img src={icon || cross} alt="icon" />
      </IconButton>
    </StyledChip>
  );
};

export default Chip;