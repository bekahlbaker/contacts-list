import React from 'react';
import styled from 'styled-components';
import devices from '../style-utils/devices';
import AlbumCard from './albumCard';

const Main = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  grid-gap: 1em;
  justify-content: center;
  max-width: 80%;
  padding: 20px;
`;

const Grid = props => {
  const { albums, onClick } = props;
  const gridItems = albums.map(album => (
    <AlbumCard album={album} onClick={onClick} key={album.album_title} />
  ));
  return <Main>{gridItems}</Main>;
};

export default Grid;
