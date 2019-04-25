import React from 'react';
import colors from '../style-utils/colors';
import styled from 'styled-components';

const Avatar = styled.div`
  margin: 0 auto;
  margin-top: -65px;
  position: absolute;
  z-index: 1;
`;

const Image = styled.img`
  border: 2px solid ${colors.lightNeutral};
  border-radius: 50%;
`;

const Button = props => {
  const { picture } = props;
  return (
    <Avatar>
      <Image src={picture.large} />
    </Avatar>
  );
};

export default Button;
