import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileUser.module.css';
const ProfileUser = ({ name, tag, location, avatar }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}> {name} </p>
      <p className={styles.tag}> @{tag} </p>
      <p className={styles.location}> {location} </p>
    </div>
  );
};

export default ProfileUser;
