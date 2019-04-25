import React, { Component, useState } from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import EditIcon from '../assets/images/edit.png';
import Avatar from './avatar';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 75px;
`;

const Main = styled.div`
  background: ${colors.lightNeutral};
  border-radius: 5px;
  min-height: 125px;
  min-width: 300px;
  padding: 8px;
  padding-top: 75px;
  position: relative;
`;

const Title = styled.p`
  color: ${colors.darkAccent};
  font-size: 1.25em;
  font-weight: 600;
  margin: 2px;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.p`
  color: black;
  margin: 2px;
`;

const Span = styled.span`
  font-size: 0.75em;
  font-weight: 600;
`;

const EditButton = styled.button`
  align-items: center;
  background: ${colors.white};
  border-radius: 50%;
  display: flex;
  height: 35px;
  justify-content: center;
  outline: none;
  position: absolute;
  right: -5px;
  top: -5px;
  width: 35px;
`;

const EditImage = styled.img`
  height: 35px;
  position: absolute;
  width: 35px;
`;

const ContactCard = props => {
  const { contact, onClick } = props;
  const { name, dob, email, picture, phone, location } = contact;
  return (
    <Wrapper>
      <Avatar picture={picture} />
      <Main>
        <Title>{`${name.first} ${name.last}`}</Title>
        <Description>
          <Span>Birthday: </Span>
          {dob.date}
        </Description>
        <Description>
          <Span>Email: </Span>
          {email}
        </Description>
        <Description>
          <Span>Phone: </Span>
          {phone}
        </Description>
        <Description>
          <Span>Address: </Span>
          {location.street}
        </Description>
        <EditButton onClick={() => onClick(contact)}>
          <EditImage src={EditIcon} />
        </EditButton>
      </Main>
    </Wrapper>
  );
};

export default ContactCard;
