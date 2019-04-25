import React from 'react';
import styled from 'styled-components';
import devices from '../style-utils/devices';
import ContactCard from './contactCard';

const Main = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  grid-gap: 1em;
  justify-content: center;
  max-width: 80%;
  padding: 20px;
`;

const Grid = props => {
  const { contacts, onClick } = props;
  const gridItems = contacts.map(contact => (
    <ContactCard contact={contact} onClick={onClick} key={contact.phone} />
  ));
  return <Main>{gridItems}</Main>;
};

export default Grid;
