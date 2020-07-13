import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendItem from '../FriendItem/FriendItem';
const List = styled.ul`
  list-style: none;
`;

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <FriendItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
// "name": "Ajax",
// "isOnline": true,
// "id": 1213
// },
