import React from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import devices from '../style-utils/devices';

const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;

  @media ${devices.tablet} {
    margin-left: 0px;
  }
`;

const Title = styled.h1`
  color: ${colors.darkAccent};
  font-family: 'Kalam', cursive;
  font-size: 2em;

  @media ${devices.tablet} {
    font-size: 3em;
  }
`;

const Logo = () => {
  return (
    <Main>
      <Title>Contacts</Title>
    </Main>
  );
};

export default Logo;
