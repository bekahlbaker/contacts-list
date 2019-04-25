import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import Button from './button';
import Input from './input';
import Dropdown from './dropdown';

const Overlay = styled.div`
  align-items: center;
  background: ${colors.transparentBlack};
  display: flex;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100vw;
  z-index: 2;
`;

const Main = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  height: 50%;
  width: 75%;
`;

const ButtonView = styled.div`
  border-bottom: 3px solid ${colors.darkNeutral};
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const EditView = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album,
    };
  }

  // Edit selected album
  handleChangeFromForm = value => {
    this.setState({ album: { ...this.state.album, ...value } }, () =>
      console.log('Edit Modal: ', this.state.album),
    );
  };

  render() {
    const { handleCancel, handleSave } = this.props;
    const { album } = this.state;
    const { album_title, year, condition, artist } = album;
    const { name } = artist;
    return (
      <Overlay>
        <Main>
          <ButtonView>
            <Button
              title="Cancel"
              fontColor={colors.error}
              onClick={handleCancel}
            />
            <Button
              title="Save"
              fontColor={colors.success}
              onClick={() => handleSave(this.state.album)}
            />
          </ButtonView>
          <EditView>
            <Input
              label="Title"
              placeholder="Title"
              onChange={value =>
                this.handleChangeFromForm({ album_title: value.target.value })
              }
              value={album_title}
            />
            <Input
              label="Artist"
              placeholder="Artist"
              onChange={value =>
                this.handleChangeFromForm({
                  artist: { ...artist, name: value.target.value },
                })
              }
              value={name}
            />
            <Input
              label="Year"
              placeholder="Year"
              onChange={value =>
                this.handleChangeFromForm({ year: value.target.value })
              }
              value={year}
            />
            <Dropdown
              label="Condition"
              placeholder="Condition"
              onChange={value =>
                this.handleChangeFromForm({ condition: value.target.value })
              }
              passedValue={condition}
            />
          </EditView>
        </Main>
      </Overlay>
    );
  }
}

export default EditModal;
