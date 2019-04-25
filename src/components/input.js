import React from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import TextField from '../components/textfield';
import devices from '../style-utils/devices';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.p`
  font-size: 0.75em;
  font-weight: 600;
  margin-right: 8px;
  text-align: right;
  width: 30%;

  @media ${devices.tablet} {
    width: 10%;
  }
`;

export const InputView = styled.div`
  align-items: center;
  background: ${colors.lightNeutral};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 8px 0;
  padding: 0px 8px;
  width: 100%;
`;

const Input = props => {
  const { placeholder, onChange, value, label } = props;
  return (
    <Main>
      <Label>{label}</Label>
      <InputView>
        <TextField
          placeholder={placeholder}
          onChange={value => onChange(value)}
          value={value}
        />
      </InputView>
    </Main>
  );
};

export default Input;
