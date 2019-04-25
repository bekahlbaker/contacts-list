import React from 'react';
import styled from 'styled-components';
import { Main, Label, InputView } from './input';

const DropdownMenu = styled.select`
  background: transparent;
  border: none;
  font-size: 0.75em;
  margin-left: -12px;
  outline: none;
  width: 100%;
`;

const Dropdown = props => {
  const { onChange, passedValue, label } = props;
  return (
    <Main>
      <Label>{label}</Label>
      <InputView>
        <DropdownMenu value={passedValue} onChange={value => onChange(value)}>
          <option value="mint">mint</option>
          <option value="very_good">very_good</option>
          <option value="good">good</option>
          <option value="fair">fair</option>
          <option value="poor">poor</option>
        </DropdownMenu>
      </InputView>
    </Main>
  );
};

export default Dropdown;
