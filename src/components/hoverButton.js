import React from 'react';
import styled from 'styled-components';
import Button from './button';
import devices from '../style-utils/devices';

const ButtonView = styled.div`
  background: transparent;
  border: 3px solid ${props => props.fontColor};
  border-radius: 10px;
  margin: 40px auto;
  padding: 8px 50px;

  @media ${devices.desktop} {
    border: 3px solid transparent;

    &:hover {
      border: 3px solid ${props => props.fontColor};
    }
  }
`;

const HoverButton = props => {
  const { onClick, fontColor, title } = props;
  return (
    <ButtonView fontColor={fontColor}>
      <Button title={title} fontColor={fontColor} onClick={onClick} />
    </ButtonView>
  );
};

export default HoverButton;
