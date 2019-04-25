import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../style-utils/colors';
import Button from './button';
import Input from './input';

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

export default function EditModal(props) {
  const [contact, setContact] = useState(props.contact);

  // Edit selected contact
  function handleChangeFromForm(value) {
    return setContact({ ...contact, ...value });
  }

  const { handleCancel, handleSave } = props;
  const { name, dob, email, phone, location } = contact;
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
            onClick={() => handleSave(contact)}
          />
        </ButtonView>
        <EditView>
          <Input
            label="First"
            placeholder="First"
            onChange={value =>
              handleChangeFromForm({
                name: { ...name, first: value.target.value },
              })
            }
            value={name.first}
          />
          <Input
            label="Last"
            placeholder="Last"
            onChange={value =>
              handleChangeFromForm({
                name: { ...name, last: value.target.value },
              })
            }
            value={name.last}
          />
          <Input
            label="Birthday"
            placeholder="Birthday"
            onChange={value =>
              handleChangeFromForm({
                dob: { ...dob, date: value.target.value },
              })
            }
            value={dob.date}
          />
          <Input
            label="Email"
            placeholder="Email"
            onChange={value =>
              handleChangeFromForm({ email: value.target.value })
            }
            value={email}
          />
          <Input
            label="Phone"
            placeholder="Phone"
            onChange={value =>
              handleChangeFromForm({ phone: value.target.value })
            }
            value={phone}
          />
          <Input
            label="Address"
            placeholder="Address"
            onChange={value =>
              handleChangeFromForm({
                location: { ...location, street: value.target.value },
              })
            }
            value={location.street}
          />
        </EditView>
      </Main>
    </Overlay>
  );
}
