import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  background: transparent;
  border: none;
  font-size: 0.75em;
  //   height: 30px;
  outline: none;
  width: 100%;
`;

const TextField = props => {
  const { placeholder, onChange, value } = props;
  return (
    <TextInput
      placeholder={placeholder}
      onChange={value => onChange(value)}
      value={value}
    />
  );
};

export default TextField;
