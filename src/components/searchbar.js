import React from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import TextField from '../components/textfield';

const OuterWrapper = styled.div`
  align-items: center;
  background: ${colors.darkNeutral};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${props => props.zIndex};
`;

const InnerWrapper = styled.div`
  background: ${colors.lightNeutral};
  border-radius: 5px;
  margin: 4px 0;
  padding: 8px 12px;
  width: 75%;
`;

const SearchBar = props => {
  const { placeholder, onChange, value, isEditing } = props;
  return (
    <OuterWrapper zIndex={isEditing ? 0 : 2}>
      <InnerWrapper>
        <TextField
          placeholder={placeholder}
          onChange={value => onChange(value)}
          value={value}
        />
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default SearchBar;
