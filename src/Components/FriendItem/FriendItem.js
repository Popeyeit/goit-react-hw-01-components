import React from 'react';
import PropTypes from 'prop-types';
import { Item, Avatar, Status, Name } from './FriendItemStyled';
const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}> </Status>{' '}
      <Avatar src={avatar} alt="" width="48" />
      <Name> {name} </Name>{' '}
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
