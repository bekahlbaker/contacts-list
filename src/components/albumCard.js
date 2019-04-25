import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import EditIcon from '../assets/images/edit.png';

const Main = styled.div`
  background: ${colors.lightNeutral};
  border-radius: 5px;
  height: 90%;
  padding: 8px;
  position: relative;
`;

const Album = styled.div`
  background: ${colors.lightAccent};
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 8px;
  text-align: center;
`;

const Title = styled.p`
  color: ${colors.white};
  padding: 8px 16px;
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

class AlbumCard extends Component {
  constructor() {
    super();

    this.state = {
      showEditing: false,
    };
  }
  render() {
    const { album, onClick } = this.props;
    const { album_title, year, condition, artist } = album;
    const { name } = artist;
    return (
      <Main>
        <Album>
          <Title>{album_title}</Title>
        </Album>
        <Description>
          <Span>Artist: </Span>
          {name}
        </Description>
        <Description>
          <Span>Year: </Span>
          {year}
        </Description>
        <Description>
          <Span>Condition: </Span>
          {condition}
        </Description>
        <EditButton onClick={() => onClick(album)}>
          <EditImage src={EditIcon} />
        </EditButton>
      </Main>
    );
  }
}

export default AlbumCard;
