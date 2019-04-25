import React from 'react';
import styled from 'styled-components';

const ButtonView = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.fontColor}
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 700;
  height: 45px;
  outline: none;
  padding: 10px;
  width: auto;
`;

const Button = props => {
  const { onClick, fontColor, title } = props;
  return (
    <ButtonView fontColor={fontColor} onClick={onClick}>
      {title}
    </ButtonView>
  );
};

export default Button;
