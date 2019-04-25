import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: center;
`;

const Header = props => {
  return (
    <Main>
      <Logo />
      {props.children}
    </Main>
  );
};

export default Header;
