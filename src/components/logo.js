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

const RecordBox = styled.div`
  height: 100px;
  margin: 0 10px;
  width: 100px;

  @media ${devices.tablet} {
    height: 125px;
    width: 125px;
  }

  @media ${devices.desktop} {
    height: 150px;
    width: 150px;
  }
`;

const RecordOuter = styled.div`
  background: black;
  border-radius: 50%;
  box-shadow: inset 0px 0px 15px white;
  height: 100%;
  position: relative;
  width: 100%;
`;

const RecordInner = styled.div`
  background: gray;
  border-radius: 50%;
  box-shadow: inset 0px 0px 5px black
  height: 40%;
  left: 30%;
  margin: auto 0;
  position: absolute;
  top: 30%;
  width: 40%;
`;

const RecordCenter = styled.div`
  background: ${colors.darkNeutral};
  border-radius: 50%;
  height: 20%;
  left: 40%;
  margin: auto 0;
  position: absolute;
  top: 40%;
  width: 20%;
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
      <Title>Greg's</Title>
      <RecordBox>
        <RecordOuter>
          <RecordInner>
            <RecordCenter />
          </RecordInner>
        </RecordOuter>
      </RecordBox>
      <Title>Records</Title>
    </Main>
  );
};

export default Logo;
