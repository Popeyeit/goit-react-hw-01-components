import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import ProfileStats from '../ProfileStats/ProfileStats';
import ProfileUser from '../ProfileUser/ProfileUser';
const Profile = ({ users }) => {
  return (
    <div className={styles.profile}>
      <ProfileUser
        name={users.name}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
      />
      <ProfileStats stats={users.stats} />
    </div>
  );
};
Profile.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

// {
//     "name": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//     "stats": {
//         "followers": 5603,
//         "views": 4827,
//         "likes": 1308
//     }
// }

export default Profile;
