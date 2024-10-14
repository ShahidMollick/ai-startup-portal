import React from 'react';
import styled from 'styled-components';
import Button from '../button/index';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Modal = ({ onClose, onSelect }) => {
  const additionalInfo = [
    'Industry',
    'Experience Level',
    'Education',
    'Certifications',
    'Skills',
    'Interests',
    'Languages',
    'Projects',
    'Publications',
    'Awards',
    'Volunteering',
    'Recommendations',
    'References',
    'Portfolio',
    'Contact Information'
  ];

  return (
    <Overlay onClick={onClose}>
      <Card onClick={e => e.stopPropagation()}>
        <Heading>Select additional information to be added</Heading>
        <ButtonList>
          {additionalInfo.map(info => (
            <Button key={info} variant="outline" onClick={() => onSelect(info)}>
              {info}
            </Button>
          ))}
        </ButtonList>
      </Card>
    </Overlay>
  );
};

export default Modal;