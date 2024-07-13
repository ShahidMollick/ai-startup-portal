import React from 'react';
import styled, { css } from 'styled-components';

const ImgButton = styled.button`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: contain;
  width: 50px; /* Set your desired width */
  height: 20px; /* Set your desired height */
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const ImageButton = ({url}) =>{ // Replace with your dynamic URL
    return (
    <div>
      <ImgButton imageUrl={url} />
    </div>
  );
};

export default ImageButton;